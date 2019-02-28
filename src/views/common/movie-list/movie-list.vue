<template>
  <div class="content">
    <header-one :title="title"
                :fixTop="true"/>
    <divider/>
    <div class="m-list">
      <div id="minirefresh"
           class="minirefresh-wrap">
        <div class="minirefresh-scroll">
          <div>
            <movie-list-item :item="item"
                             v-for="item in list"
                             :key="item.id"/>
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
  name: "MovieList",
  components: { headerOne, movieListItem },
  props:{
    title:{
      type:String,
      required:true
    },
    api:{
      type:Function,
      required:true
    }
  },
  data() {
    return {
      page: {
        start: 1,
        count: 10,
        maxNum: 250
      },
      list: [],
      //避免重复请求
      isPosting: false,
      miniRefresh: null
    };
  },
  created() {
    this.api(this.page).then(resp => {
      this.list = resp.subjects;
      //console.log(resp);
    });
  },
  mounted() {
    this.handerResize();
    this.initMiniRefresh();
  },
  methods: {
    handerResize() {
      this.$nextTick(function() {
        setTimeout(() => {
          const htmlH = document.querySelector("html").offsetHeight;
          let mList = document.querySelector(".m-list");
          const mListTop = mList.getBoundingClientRect().top;
          console.log(mListTop);
          const menuH = document.querySelector(".menu_bar").offsetHeight;
          console.log(htmlH, mListTop, menuH);
          mList.style.height = htmlH - mListTop - menuH + "px";
        }, 10);
      });
    },
    initMiniRefresh() {
      // 引入任何一个主题后，都会有一个 MiniRefresh 全局变量
      let that = this;
      this.miniRefresh = new MiniRefresh({
        container: "#minirefresh",
        down: {
          isLock: true
        },
        up: {
          callback: function() {
            // 上拉事件
            that.fetchMore();
            //miniRefresh.endUpLoading(that.page.start > 250 ? true : false);
            // if (that.page.start < 250) {
            //   that.fetchMore();
            // } else {
            //   console.log("excuse me");
            //   // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
            //   miniRefresh.endUpLoading(true);
            // }
          }
        }
      });
    },
    fetchMore() {
      if (this.isPosting) {
        return;
      }
      let temp = { ...this.page };
      temp.start = temp.start + temp.count;

      this.isPosting = true;
      this.api(temp)
        .then(resp => {
          this.list = this.list.concat(...resp.subjects);
          this.page = temp;
          this.miniRefresh.endUpLoading(
            this.page.start > this.page.maxNum ? true : false
          );
        })
        .finally(() => {
          this.isPosting = false;
        });
    }
  }
};
</script>




