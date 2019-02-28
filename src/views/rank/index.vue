<template>
  <div class="content">
    <header-one title="榜单"
                :fixTop="true" />
    <x-scroll-big-poster title="北美票房榜"
                         describle="下列是否有你的菜呢"
                         :list="us_box" />
    <divider />
    <x-scroll-two-item title="新片榜"
                       :list="new_movies" />
    <divider />
    <x-scroll-triple-item title="即将上映"
                          :list="coming_soon" />
    <divider />
    <withVideo title="大家都在看"
               videoSource="http://vt1.doubanio.com/2018082122186ae3c7fe670775dfdf11433c6a5359cf/view/movie/M/402340478.mp4"
               :item="MOCK_FAVORITE" />

    <divider />
    <category-list title="热门类别"
                   :list="hot_style" />
    <friend-link />
    <my-footer />
  </div>
</template>

<script>
import headerOne from "@views/common/header/type-1.vue";
import headerBlcok from "@views/common/header/header-block.vue";
import myFooter from "@views/common/footer/index.vue";
import friendLink from "@views/common/footer/friend-link.vue";
import xScrollBigPoster from "@views/common/movie-list/xscroll-big-poster.vue";
import xScrollTwoItem from "@views/common/movie-list/xscroll-two-item.vue";
import xScrollTripleItem from "@views/common/movie-list/xscroll-triple-item.vue";
import withVideo from "@views/common/movie-list-item/with-video.vue";
import categoryList from "@views/common/category/index.vue";
import movieListItem from "@views/common/movie-list-item/index.vue";
const HOT_STYLE = [
  {
    title: "益智解谜"
  },
  {
    title: "动作游戏"
  },
  {
    title: "角色扮演游戏"
  },
  {
    title: "街机游戏"
  },
  {
    title: "策略游戏"
  },
  {
    title: "体育"
  }
];

const MOCK_FAVORITE = {
  id: 1,
  title: "一出好戏",
  directors: [{ name: "黄渤" }],
  images: {
    large:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg"
  },
  summary:
    "马进欠下债务，与远房表弟小兴在底层社会摸爬滚打，习惯性的买彩票，企图一夜暴富，并迎娶自己的同事姗姗。一日，公司全体员工出海团建，途中，马进收到了彩票中头奖的信息，六千万！就在马进狂喜自己翻身的日子终于到来之际，一场突如其来的滔天巨浪打破了一切。苏醒过来的众人发现身处荒岛 ，丧失了一切与外界的联系……"
};
export default {
  name: "rankPage",
  components: {
    headerOne,
    headerBlcok,
    myFooter,
    friendLink,
    xScrollBigPoster,
    xScrollTwoItem,
    xScrollTripleItem,
    withVideo,
    categoryList,
    movieListItem
  },
  data() {
    return {
      coming_soon: [],
      new_movies: [],
      us_box: [],
      hot_style: HOT_STYLE,
      MOCK_FAVORITE
    };
  },
  created() {
    this.$api.MOVIE_COMING_SOON("?start=0&count=4").then(resp => {
      this.coming_soon = resp.subjects;
    });
    this.$api.MOVIE_NEW_MOVIES("").then(resp => {
      this.new_movies = resp.subjects.slice(0, 9);
    });
    this.$api.MOVIE_US_BOX("").then(resp => {
      this.us_box = resp.subjects.slice(0, 4);
    });
  },
  watch: {}
};
</script>
