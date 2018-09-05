<template>
  <div class="content">
    <header-one title="Top250"
                :fixTop="true"></header-one>
    <divider></divider>
    <div class="view-wrapper">
      <div id="minirefresh"
           class="minirefresh-wrap">
        <div class="minirefresh-scroll">
          <div>
            <movie-list-item :item="item"
                             v-for="item in top250"
                             :key="item.id"></movie-list-item>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import MiniRefreshTools from "minirefresh";
import headerOne from "@views/common/header/type-1.vue";
import movieListItem from "@views/common/movie-list-item/index.vue";
import "minirefresh/dist/debug/minirefresh.css";
export default {
  name: "top250",
  components: { headerOne, movieListItem },
  data() {
    return {
      top250: []
    };
  },
  created() {
    this.$api.MOVIE_TOP250("?start=25&count=25").then(resp => {
      this.top250 = resp.subjects;
      //console.log(resp);
    });
  },
  mounted() {
    this.initMiniRefresh();
  },
  methods: {
    initMiniRefresh() {
      // 引入任何一个主题后，都会有一个 MiniRefresh 全局变量
      var miniRefresh = new MiniRefresh({
        container: "#minirefresh",
        down: {
          callback: function() {
            // 下拉事件

            miniRefresh.endDownLoading();
          }
        },
        up: {
          callback: function() {
            // 上拉事件

            // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
            miniRefresh.endUpLoading(true);
          }
        }
      });
    }
  }
};
</script>


