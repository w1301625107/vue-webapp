<template>
  <div class="content">
    <header-one title="榜单"></header-one>
    <div class="divide"></div>
    <div class="rank_us_box">
      <h3>北美票房榜</h3>
      <p>下列是否有你的菜呢</p>
      <!-- <div class="_scroll_wrapper"> -->
      <div class="base_scroll">
        <section v-for="item in us_box"
                 class="_item"
                 :key="item.subject.id">
          <div class="_wrapper">
            <img :src="item.subject.images.large"
                 alt="">
          </div>
        </section>
      </div>
      <!-- </div> -->
    </div>
    <div class="divide"></div>
    <div class="rank_new_movies">
      <h3 class="rank_block_header">新片榜
        <button>查看全部</button>
      </h3>
      <div class="base_scroll">
        <movie-list-item :item="item"
                         v-for="item in new_movies"
                         :key="item.id"></movie-list-item>

      </div>
    </div>
    <div class="divide"></div>
    <div class="rank_coming_soon">
      <h3 class="rank_block_header">即将上映
        <button>查看全部</button>
      </h3>
      <!-- <div class="_scroll_wrapper"> -->
      <div class="base_scroll">
        <movie-list-item :item="item"
                         clsType="type2"
                         v-for="item in coming_soon"
                         :key="item.id"></movie-list-item>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import headerOne from "@views/common/header/type-1.vue";
import movieListItem from "@views/common/movie-list-item/index.vue";
export default {
  name: "rankPage",
  components: { headerOne, movieListItem },
  data() {
    return {
      coming_soon: [],
      new_movies: [],
      us_box: []
    };
  },
  created() {
    this.$api.MOVIE_COMING_SOON("?start=0&count=4").then(resp => {
      this.coming_soon = resp.subjects;
      //console.log(resp);
    });
    this.$api.MOVIE_NEW_MOVIES("").then(resp => {
      this.new_movies = resp.subjects.slice(0, 9);
      //console.log(resp);
    });
    this.$api.MOVIE_US_BOX("").then(resp => {
      this.us_box = resp.subjects.slice(0, 4);
    });
  },
  watch: {}
};
</script>
