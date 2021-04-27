<template>
  <div class="flex items-center">
    <div v-if="updatedAt">
      Last update: {{ updatedAt.toLocaleString() }}
    </div>
    <div class="flex-1" />
    <button
      v-show="online"
      class="bg-indigo-600 text-white px-3 font-medium py-1 rounded-md"
      type="button"
      @click="fetchHeadlines"
    >
      Refresh
    </button>
  </div>
  <Spinner
    v-if="loading"
    class="mt-64 h-12 w-12 mx-auto"
  />
  <NewsList
    v-else
    class="mt-8"
    :news="headlines"
  />
</template>

<script>
import { ref } from "vue"
import NewsList from "../components/NewsList.vue"
import Spinner from "../components/Spinner.vue"
import { online } from "../composables/connectivity"

export default {
  name: "Headlines",
  components: { Spinner, NewsList },
  setup() {

    const loading = ref(false)
    const error = ref(false)
    const headlines = ref([])
    const updatedAt = ref(null)

    async function fetchHeadlines() {
      try {
        loading.value = true
        const response = await fetch('https://www.tagesschau.de/api2/news/')
        const data = await response.json()
        headlines.value = data.news
        updatedAt.value = new Date()
      } catch (e) {
        error.value = true
      } finally {
        loading.value = false
      }
    }

    return {
      online,
      loading,
      error,
      headlines,
      updatedAt,
      fetchHeadlines,
    }
  },
  created() {
    this.fetchHeadlines()
  }
}
</script>

<style scoped>

</style>