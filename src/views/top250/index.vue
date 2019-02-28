<template>
  <movie-list title="top250" :api="this.$api.MOVIE_TOP250"/>
</template>

<script>
import movieList from "@views/common/movie-list/movie-list.vue";
export default {
  name: "top250",
  components: { movieList },
};
</script>


