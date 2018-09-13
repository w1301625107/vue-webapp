<template>
  <div class="content">
    <header-return>返回</header-return>
  </div>
</template>

<script>
import headerReturn from "@views/common/header/header-return.vue";
export default {
  name: "item",
  components: { headerReturn },
  created() {
    let { itemId: movieId } = this.$route.params;
    this.$api.MOVIE_SUBJECT(`/${movieId}`);
  }
};
</script>

<style
</style>
