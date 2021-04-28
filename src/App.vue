<template>
  <div class="min-h-screen dark:bg-gray-900 dark:text-white">
    <TheNav />
    <main class="max-w-7xl p-4 lg:p-8 mx-auto">
      <router-view />
    </main>
    <ReloadPrompt />
    <CacheStatusIndicator />
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue"
import ReloadPrompt from "./components/ReloadPrompt.vue"
import CacheStatusIndicator from "./components/CacheStatusIndicator.vue"
export default {
  name: 'App',
  components: { CacheStatusIndicator, ReloadPrompt, TheNav }
}
</script>

<style>
</style>
