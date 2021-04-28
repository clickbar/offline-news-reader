<template>
  <div
    v-if="offlineReady || needRefresh"
    class="notification"
    role="alert"
  >
    <div class="message">
      <span v-if="offlineReady">
        Die App ist nun offline verfügbar
      </span>
      <span v-else>
        Update verfügbar, bitte neu laden
      </span>
    </div>
    <div class="flex-1" />
    <button
      v-if="needRefresh"
      class="btn-primary ml-4"
      @click="updateServiceWorker()"
    >
      Neuladen
    </button>
    <button
      v-else
      class="btn-secondary ml-4"
      @click="close"
    >
      Schließen
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