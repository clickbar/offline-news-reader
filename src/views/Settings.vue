<template>
  <div>
    <div class="flex items-center justify-between">
      <span
        id="availability-label"
        class="flex-grow flex flex-col"
      >
        <span class="text-sm font-medium text-gray-900 dark:text-white">Nutze Dark Mode</span>
      </span>
      <button
        type="button"
        class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        role="switch"
        aria-checked="false"
        aria-labelledby="availability-label"
        :class="{
          'bg-indigo-600': darkModeEnabled,
          'bg-gray-200': !darkModeEnabled
        }"
        @click="toggleDarkMode"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          :class="{
            'translate-x-0': !darkModeEnabled,
            'translate-x-5': darkModeEnabled
          }"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      darkModeEnabled: localStorage.getItem('theme') === 'dark'
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.darkModeEnabled) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
      this.darkModeEnabled = !this.darkModeEnabled
    }
  }
}
</script>

<style scoped>

</style>