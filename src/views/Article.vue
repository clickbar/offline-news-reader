<template>
  <Spinner
    v-if="loading"
    class="mt-32 h-12 w-12 mx-auto"
  />
  <div
    v-else-if="error"
    class="py-12 text-2xl text-center "
  >
    Fehler beim Laden des Artikels.
  </div>
  <div v-else>
    <article class="mb-12">
      <img
        v-if="article.teaserImage"
        :src="article.teaserImage.videowebl.imageurl"
        :alt="article.teaserImage.alttext"
        class="h-[16rem] md:h-[24rem] lg:h-[32rem] w-full object-cover"
      >
      <div class="mt-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">{{
              article.topline
            }}</span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >{{
              article.title
            }}</span>
          </h1>
        </div>
        <div class="mt-6 prose prose-indigo lg:prose-lg text-gray-500 dark:text-white dark:text-opacity-80 mx-auto">
          <p
            v-for="(contentBlock, i) in textContent"
            :key="i"
            v-html="contentBlock.value"
          />
        </div>
      </div>
    </article>
    <div class="fixed bottom-0 left-0 right-0 h-12 bg-white shadow dark:bg-gray-800">
      <div
        class="flex justify-end items-center mx-auto max-w-3xl px-4 h-full gap-2 text-gray-600 dark:text-white dark:text-opacity-70"
      >
        <button
          class="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
          @click="$router.back()"
        >
          <IconChevronLeft class="h-5 w-5" />
        </button>
        <div class="flex-1" />
        <a
          v-if="online"
          :href="article.detailsweb"
          target="_blank"
          class="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <IconExternalLink class="h-5 w-5" />
        </a>
        <button
          v-if="canShare"
          class="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
          @click="share"
        >
          <IconShare class="h-5 w-5" />
        </button>
        <button
          class="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
          @click="saveOrRemoveArticle"
        >
          <IconHeart
            class="h-5 w-5"
            :class="saved && 'text-red-600'"
            :fill="saved"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toRaw } from 'vue'
import Spinner from "../components/Spinner.vue"
import IconShare from "../components/IconShare.vue"
import IconHeart from "../components/IconHeart.vue"
import IconExternalLink from "../components/IconExternalLink.vue"
import IconChevronLeft from "../components/IconChevronLeft.vue"
import articles from "../database/articles"
import { online } from "../composables/connectivity"

export default {
  name: "Article",
  components: { IconExternalLink, IconChevronLeft, IconHeart, IconShare, Spinner },
  setup() {
    return {
      online
    }
  },
  data() {
    return {
      loading: false,
      error: false,
      article: null,
      saved: false,
      canShare: Boolean(navigator.share)
    }
  },
  computed: {
    textContent() {
      return this.article.content.filter((contentBlock) => contentBlock.type === 'text' || contentBlock.type === 'headline')
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.loading = true
      // load the article from the databases first
      const article = await articles.get(this.$route.params.id)
      if (article) {
        this.saved = true
        this.article = article
        this.loading = false
        return
      }

      // fall back to fetch
      const url = this.$route.query.url
      try {
        const response = await fetch(url)
        this.article = await response.json()
      } catch (e) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
    async saveOrRemoveArticle() {
      if (this.saved) {
        await articles.remove(this.article)
      } else {
        await articles.save(toRaw(this.article))
      }
      this.saved = !this.saved
    },
    share() {
      navigator.share({
        title: this.article.title,
        url: this.article.detailsweb
      })
    }
  }
}
</script>

<style>

.dark .prose h2 {
  @apply text-white;
}

.dark .prose strong {
  @apply text-white;
}

</style>