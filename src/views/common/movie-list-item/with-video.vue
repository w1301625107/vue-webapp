<template>
   <div class="m-with-video base_block">
      <header-blcok :title="title"
                    @viewAll="console.log(3)"/>
      <p class="_summary">{{summary}}</p>
      <video controls
             class="_video">
        <source :src="videoSource"
                type="video/mp4"
                referrerpolicy="never">
      </video>
      <movie-list-item :item="item"/>

    </div>
</template>

<script>
import headerBlcok from "@views/common/header/header-block.vue";
import movieListItem from "@views/common/movie-list-item/index.vue";
export default {
  name: "WithVideo",
  components: { headerBlcok, movieListItem },
  props: {
    title: String,
    summary:String,
    videoSource:{
      type:String,
      required:true
    },
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
