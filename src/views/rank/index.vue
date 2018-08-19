<template>
  <div class="content">
    <header-one title="榜单"></header-one>
    <div class="divide"></div>
    <div class="rank_coming_soon">
      <h3>即将上映</h3>
      <p>下列是否有你的菜呢</p>
      <div class="_scroll_wrapper">
        <div class="_scroll">
          <section v-for="item in coming_soon"
                   class="_item"
                   :key="item.id">
            <div class="_wrapper">
              <img :src="item.images.large"
                   alt="">
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="rank_new_movies">
      <h3 class="rank_block_header">新片榜
        <span>查看全部</span>
      </h3>
      <div class="_wrapper">
        <!-- <section v-for="item in new_movies"
                 :key="item.id"
                 class="movie_list_item">
          <div class="_img_wrapper">
            <img :src="item.images.large"
                 alt="">
          </div>
          <div class="_desc">
            <div>
              <p>{{item.title}}</p>
              <p>{{item.directors[0].name}}</p>
            </div>
            <div>
              <button class="button_base button_cls2">详情</button>
            </div>
          </div>
        </section> -->
        <movie-list-item :item="item"
                         v-for="item in new_movies"
                         :key="item.id"></movie-list-item>

      </div>

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
      new_movies: []
    };
  },
  created() {
    this.$api.MOVIE_COMING_SOON("?start=0&count=4").then(resp => {
      this.coming_soon = resp.subjects;
      console.log(resp);
    });
    this.$api.MOVIE_NEW_MOVIES("").then(resp => {
      this.new_movies = resp.subjects.slice(0, 3);
      console.log(resp);
    });
  },
  watch: {
    new_movies(newV, oldV) {
      document.querySelector(".rank_coming_soon ._scroll").style.width =
        document.querySelector(".rank_coming_soon ._item").offsetWidth *
          (this.new_movies.length + 1) +
        "px";
    }
  }
};
</script>
