<template>
  <div class="content">
    <header-one title="今日热映"
                :extra="getFormatData()"></header-one>
    <div class="home_movie_hot">
      <section v-for="item in movie_list"
               class="_item"
               :key="item.id">
        <div class="_wrapper">
          <!-- <img :src="this.$fixImage(item.images.large)"
               alt=""> -->
          <img :src="item.images.large|fixImages403"
               alt="">
        </div>
        <div class="_desc">
          <h2 class="_title">{{item.title}}</h2>
          <p class="_directors">{{item.directors[0].name}}</p>
        </div>
      </section>
    </div>
    <div>
      <button class="button_cls1">兑换</button>
      <button class="button_cls1">为我点个赞</button>
    </div>
    <div class="rule">
      <p>数据来源于豆瓣电影</p>
    </div>

  </div>
</template>

<script>
import headerOne from "@views/common/header/type-1.vue";
export default {
  name: "HomePage",
  components: { headerOne },
  data() {
    return {
      movie_list: []
    };
  },
  created() {
    this.$api.MOVIE_IN_THEATHER("?city=北京").then(resp => {
      console.log(resp);
      this.movie_list = resp.subjects.slice(0, 3);
    });
  },
  methods: {
    // 解决403图片缓存问题
    getImages(_url) {
      if (_url !== undefined) {
        let _u = _url.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
      }
    },
    getFormatData() {
      const date = new Date();
      var str =
        "" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + "  星期";
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

      return str + day;
    }
  }
};
</script>
