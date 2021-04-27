<template>
  <div class="min-h-screen dark:bg-gray-900 dark:text-white">
    <TheNav></TheNav>
    <main class="max-w-7xl p-4 lg:p-8 mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue"
export default {
  name: 'App',
  components: { TheNav }
}
</script>

<style>
</style>
