<template>
  <div class="content">
    <header-one title="榜单"></header-one>
    <div class="divide"></div>
    <div class="rank_coming_soon">
      <div class="_scroll">
        <section v-for="item in coming_soon"
                 class="_item"
                 :key="item.id">
          <div class="_wrapper">
            <img :src="item.images.large|fixImages403"
                 alt="">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import headerOne from "@views/common/header/type-1.vue";
export default {
  name: "rankPage",
  components: { headerOne },
  data() {
    return {
      coming_soon: []
    };
  },
  created() {
    this.$api.MOVIE_COMING_SOON("?start=0&count=4").then(resp => {
      this.coming_soon = resp.subjects;
      console.log(resp);
    });
  }
};
</script>
