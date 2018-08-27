<template>
  <div class="content">
    
    <header-one title="榜单" :fixTop="true"></header-one>
    <div class="rank_us_box base_block">
      <h3>北美票房榜</h3>
      <p>下列是否有你的菜呢</p>
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
    </div>
    <div class="rank_new_movies base_block">
      <divider></divider>
      <header-blcok title="新片榜"
                    @viewAll="$router.push('/101')"></header-blcok>
      <div class="base_scroll">
        <movie-list-item :item="item"
                         v-for="item in new_movies"
                         :key="item.id"></movie-list-item>
      </div>
    </div>
    <div class="rank_coming_soon base_block">
      <divider></divider>
      <header-blcok title="即将上映"
                    @viewAll="console.log(2)"></header-blcok>
      <div class="base_scroll">
        <movie-list-item :item="item"
                         clsType="type2"
                         v-for="item in coming_soon"
                         :key="item.id"></movie-list-item>
      </div>
    </div>

    <div class="most_favorite base_block">
      <divider></divider>
      <header-blcok title="大家都在看"
                    @viewAll="console.log(3)"></header-blcok>
      <p class="_summary">{{MOCK_FAVORITE.summary}}</p>
      <video controls
             class="_video">
        <source src="http://vt1.doubanio.com/2018082122186ae3c7fe670775dfdf11433c6a5359cf/view/movie/M/402340478.mp4"
      
                type="video/mp4"
                referrerpolicy="never">
      </video>

      <movie-list-item :item="MOCK_FAVORITE"></movie-list-item>

    </div>

    <div class="hot_style base_block">
      <divider></divider>
      <header-blcok title="热门类别"
                    @viewAll="console.log(4)"></header-blcok>
      <div class="_wrapper">
        <section v-for="item in hot_style"
                 :key="item.title">
          <div class="_img_wrapper"><img src="../../assets/iconfont/film.svg"
                 alt=""></div>
          <p class="_title">{{item.title}}</p>
          <div class="_divider"></div>
        </section>
      </div>
    </div>
    <div class="quick_link base_block">
      <divider></divider>
      <header-blcok title="快速链接"
                    :showButton="false"
                    @viewAll="console.log(4)"></header-blcok>
      <p>Vue 中文网</p>
      <p>Webpcak 中文文档</p>
      <p>豆瓣 开放API</p>
      <p>Axios</p>
      <p>Scss~Postcss</p>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import headerOne from "@views/common/header/type-1.vue";
import headerBlcok from "@views/common/header/header-block.vue";
import myFooter from "@views/common/footer/index.vue";
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
  components: { headerOne, headerBlcok, myFooter, movieListItem },
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
