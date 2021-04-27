<template>
  <Spinner
    v-if="loading"
    class="mt-32 h-12 w-12 mx-auto"
  />
  <div v-else>
    <article class="mb-12">
      <img
        v-if="news.teaserImage"
        :src="news.teaserImage.videowebl.imageurl"
        :alt="news.teaserImage.alttext"
        class="h-[24rem] lg:h-[32rem] w-full object-cover"
      >
      <div class="mt-8 px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">{{
              news.topline
            }}</span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >{{
              news.title
            }}</span>
          </h1>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-white dark:text-opacity-80 mx-auto">
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
          class=""
          @click="$router.back()"
        >
          &leftarrow;
          Zurück
        </button>
        <div class="flex-1" />
        <a
          :href="news.detailsweb"
          target="_blank"
          class="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <IconShare class="h-5 w-5" />
        </a>
        <button class="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
          <IconHeart
            class="h-5 w-5"
            :class="isSaved && 'text-red-600'"
            :fill="isSaved"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue"
import IconShare from "../components/IconShare.vue"
import IconHeart from "../components/IconHeart.vue"

export default {
  name: "Article",
  components: { IconHeart, IconShare, Spinner },
  data() {
    return {
      loading: false,
      error: false,
      news: null
    }
  },
  computed: {
    textContent() {
      return this.news.content.filter((contentBlock) => contentBlock.type === 'text' || contentBlock.type === 'headline')
    },
    isSaved() {
      return true
    }
  },
  created() {
    this.fetchDetails()
  },
  methods: {
    async fetchDetails() {
      const url = this.$route.query.url
      try {
        this.loading = true
        const response = await fetch(url)
        this.news = await response.json()
      } catch (e) {
        this.error = true
      } finally {
        this.loading = false
      }
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