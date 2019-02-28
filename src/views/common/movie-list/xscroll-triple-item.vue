<template>
  <div class="m-xscroll-triple-item base_block">
    <header-blcok :title="title"
                  @viewAll="console.log(2)" />
    <div class="base_scroll">
      <movie-list-item :item="item"
                       clsType="type2"
                       v-for="item in list"
                       :key="item.id" />
    </div>
  </div>
</template>

<script>
import headerBlcok from "@views/common/header/header-block.vue";
import movieListItem from "@views/common/movie-list-item/index.vue";
export default {
  name: "XScrollTripleItem",
  components: { headerBlcok, movieListItem },
  props: {
    title: String,
    list: {
      type: Array,
      required: true
    }
  }
};
</script>
