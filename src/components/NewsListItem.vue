<template>
  <router-link
    :to="linkToReader"
    class="flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg"
  >
    <div class="flex-shrink-0 bg-gray-100 dark:bg-gray-700">
      <img
        v-if="news.teaserImage"
        loading="lazy"
        class="h-48 w-full object-cover"
        :src="news.teaserImage.videowebl.imageurl"
        :alt="news.teaserImage.alttext"
      >
      <div
        v-else
        class="h-48"
      />
    </div>
    <div class="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
      <p class="text-sm font-medium text-indigo-600">
        {{ news.topline }}
      </p>
      <p class="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
        {{ news.title }}
      </p>
      <p class="mt-3 text-base text-gray-700 dark:text-white dark:text-opacity-80">
        {{
          news.firstSentence
        }}
      </p>
      <p class="mt-3 text-sm text-gray-500 dark:text-white dark:text-opacity-70">
        <time datetime="2020-03-16">
          {{ formattedDate }}
        </time>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsListItem",
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  computed: {
    linkToReader() {
      return {
        name: 'article',
        params: {
          id: this.news.sophoraId
        },
        query: {
          url: this.news.details
        }
      }
    },
    formattedDate() {
      const date = new Date(this.news.date)
      return date.toLocaleString()
    }
  }
}
</script>

<style scoped>

</style>