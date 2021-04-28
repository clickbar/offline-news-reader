import { ref, nextTick } from "vue"
import { online } from "./connectivity"
import { isBefore, subHours } from 'date-fns'

const refreshing = ref(false)
const updatedAt = ref(new Date(window.localStorage.getItem("updatedAt")))

function shouldRefresh() {
    return online.value && isBefore(updatedAt.value, subHours(new Date(), 1))
}

async function fetchHeadlines(refresh = false) {
    refresh = refresh || shouldRefresh()
    if (refresh) {
        // clear the news cache before refreshing the new headlines
        await clearCache()
    }

    const response = await fetch('https://www.tagesschau.de/api2/news/')
    const { news } = await response.json()
    const stories = news.filter((article) => article.type === 'story')

    if (refresh) {
        // the cache was cleared, populate it again
        // using nextTick to avoid stutter
        nextTick(() => {
            downloadAndCache(stories)
        })
        // and set updatedAt to the current date
        updatedAt.value = new Date()
        window.localStorage.setItem("updatedAt", updatedAt.value.toISOString())
    }

    return stories
}

async function downloadAndCache(news) {

    // use a set here because cache.addAll() throws an exception on duplicate urls
    const urls = new Set()

    news.forEach((item) => {
        if (item.details) {
            urls.add(item.details)
        }
        if (item.teaserImage) {
            urls.add(item.teaserImage.videowebl.imageurl)
        }
    })

    try {
        refreshing.value = true
        const cache = await window.caches.open('news')
        for (const url of urls) {
            await cache.add(url)
        }
        // caution: can cause some stutter on the page!
        // await cache.addAll(urls)
    } catch (e) {
        console.exception(e)
    } finally {
        refreshing.value = false
    }
}

function clearCache() {
    return window.caches.delete('news')
}

export function useNewsCache() {
    return {
        fetchHeadlines, refreshing, updatedAt
    }
}