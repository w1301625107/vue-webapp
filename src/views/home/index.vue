<template>
  <div class="content">
    <header-one title="今日热映"
                :extra="getFormatData()"/>
    <div class="home_movie_hot">
      <big-poster  v-for="item in movie_list" :item="item"  :key="item.id"/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import headerOne from "@views/common/header/type-1.vue";
import myFooter from "@views/common/footer/index.vue";
import bigPoster from "@views/common/movie-list-item/big-poster";
export default {
  name: "HomePage",
  components: { headerOne, myFooter, bigPoster },
  data() {
    return {
      movie_list: []
    };
  },
  created() {
    this.$api.MOVIE_IN_THEATHER("?city=北京").then(resp => {
      this.movie_list = resp.subjects.slice(0, 3);
    });
  },
  methods: {
    getFormatData() {
      const date = new Date();
      let day;
      switch (date.getDay()) {
        case 1:
          day = "一";
          break;
        case 2:
          day = "二";
          break;
        case 3:
          day = "三";
          break;
        case 4:
          day = "四";
          break;
        case 5:
          day = "五";
          break;
        case 6:
          day = "六";
          break;
        case 0:
          day = "日";
          break;
      }
      return `  ${(date.getMonth() + 1)} 月 ${date.getDate()} 日  星期${day}`
    }
  }
};
</script>
