<template>
  <div
    v-if="refreshing"
    class="notification"
    role="alert"
  >
    <div>
      Downloading news for offline use...
    </div>
    <div class="flex-1" />
    <Spinner class="h-4 w-4" />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue"
import { useNewsCache } from "../composables/newsCache"

export default {
  name: 'CacheStatusIndicator',
  components: { Spinner },
  setup() {
    return useNewsCache()
  }
}

</script>

<style scoped>

</style>