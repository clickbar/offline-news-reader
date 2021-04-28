<template>
  <nav class="bg-gray-800 left-0 right-0 fixed top-0 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16">
        <img
          class="h-8 w-8"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        >
        <h1 class="ml-4 hidden md:block text-white font-bold text-xl">
          Offline News Reader
        </h1>
        <div class="ml-4 md:ml-10 flex items-baseline space-x-4">
          <router-link
            v-for="navItem in navItems"
            :key="navItem.name"
            :to="navItem.to"
            class="nav-item"
            active-class="nav-item--active"
          >
            {{ navItem.name }}
          </router-link>
        </div>
        <div class="flex-1" />
        <router-link
          to="/settings"
          class="nav-item"
          active-class="nav-item--active"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          /><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          /></svg>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {
      navItems: [{
        name: 'Headlines',
        to: '/headlines'
      },
        {
          name: 'Gespeicherte Artikel',
          to: '/saved'
        }
      ]
    }
  }
}
</script>

<style scoped>
.nav-item {
  @apply px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white whitespace-nowrap;
}

.nav-item--active {
  @apply bg-gray-900 text-white;
}
</style>