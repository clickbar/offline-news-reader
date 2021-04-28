<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <NewsListItem
      v-for="newsDetails in news"
      :key="newsDetails.sophoraId"
      :news="newsDetails"
    />
  </div>
</template>

<script>
import NewsListItem from "./NewsListItem.vue"
export default {
  name: "NewsList",
  components: { NewsListItem },
  props: {
    news: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>