<template>
  <div
    v-if="offlineReady || needRefresh"
    class="notification"
    role="alert"
  >
    <div class="message">
      <span v-if="offlineReady">
        App ready to work offline
      </span>
      <span v-else>
        New content available, click reload to update.
      </span>
    </div>
    <div class="flex-1" />
    <button
      v-if="needRefresh"
      class="btn-primary"
      @click="updateServiceWorker()"
    >
      Reload
    </button>
    <button
      class="btn-secondary ml-2"
      @click="close"
    >
      Close
    </button>
  </div>
</template>

<script>
import { useRegisterSW } from 'virtual:pwa-register/vue'

export default {
  name: 'ReloadPrompt',
  setup() {
    const {
      offlineReady,
      needRefresh,
      updateServiceWorker,
    } = useRegisterSW()

    const close = async() => {
      offlineReady.value = false
      needRefresh.value = false
    }

    return {
      offlineReady,
      needRefresh,
      updateServiceWorker,
      close
    }
  }
}

</script>

<style scoped>

</style>