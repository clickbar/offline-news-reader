<template>
  <NewsList
    :news="savedNews"
  />
</template>

<script>
import NewsList from "../components/NewsList.vue"

export default {
  name: "SavedNews",
  components: { NewsList },
  data() {
    return {
      savedNews: []
    }
  }
}
</script>

<style scoped>

</style>