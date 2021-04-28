<template>
  <div
    v-if="articles.length === 0"
    class="py-12 text-2xl text-center"
  >
    Keine Artikel gespeichert.
  </div>
  <NewsList
    v-else
    :news="articles"
  />
</template>

<script>
import NewsList from "../components/NewsList.vue"
import articles from "../database/articles"

export default {
  name: "SavedArticles",
  components: { NewsList },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.load()
  },
  methods: {
    async remove(article) {
      await articles.remove(article)
      this.articles.splice(this.articles.indexOf(article))
    },
    async load() {
      this.articles = await articles.list()
    }
  }
}
</script>

<style scoped>

</style>