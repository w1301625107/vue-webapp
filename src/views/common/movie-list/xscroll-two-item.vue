<template>
  <div class="m-xscroll-two-item base_block">
    <header-blcok :title="title"
                  @viewAll="$router.push('/101')"/>
    <div class="base_scroll">
      <movie-list-item :item="item"
                       v-for="item in list"
                       :key="item.id"/>
    </div>
  </div>
</template>

<script>
import headerBlcok from "@views/common/header/header-block.vue";
import movieListItem from "@views/common/movie-list-item/index.vue";
export default {
  name: "XScrollTwoItem",
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

