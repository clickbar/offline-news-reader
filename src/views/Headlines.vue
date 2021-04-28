<template>
  <div class="flex items-center gap-4">
    <div
      v-if="updatedAt"
      class="font-medium text-sm md:text-base"
    >
      Letztes Update: {{ updatedAt.toLocaleString() }}
    </div>
    <div class="flex-1" />
    <button
      v-show="online"
      class="btn-primary"
      type="button"
      @click="load(true)"
    >
      Aktualisieren
    </button>
  </div>
  <Spinner
    v-if="loading"
    class="mt-64 h-12 w-12 mx-auto"
  />
  <NewsList
    v-else
    class="mt-4 lg:mt-8"
    :news="headlines"
  />
</template>

<script>
import { ref } from "vue"
import NewsList from "../components/NewsList.vue"
import Spinner from "../components/Spinner.vue"
import { online } from "../composables/connectivity"
import { useNewsCache } from "../composables/newsCache"

export default {
  name: "Headlines",
  components: { Spinner, NewsList },
  setup() {

    const {
      fetchHeadlines,
      updatedAt
    } = useNewsCache()

    const loading = ref(false)
    const error = ref(false)
    const headlines = ref([])

    async function load(refresh = false) {
      try {
        loading.value = true
        headlines.value = await fetchHeadlines(refresh)
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
      load,
    }
  },
  created() {
    this.load()
  }
}
</script>

<style scoped>

</style>