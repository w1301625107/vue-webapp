<template>
  <div class="hot_style base_block">
    <header-blcok :title="title"
                  @viewAll="console.log(4)"></header-blcok>
    <div class="_wrapper">
      <div v-for="item in list"
           :key="item.title"
           class="_item">
        <div class="_img_wrapper"><img src="../../../assets/iconfont/film.svg"
               alt=""></div>
        <p class="_title">{{item.title}}</p>
        <div class="_divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBlcok from "@views/common/header/header-block.vue";
export default {
  name: "CategoryList",
  components: { headerBlcok },
  props: {
    title: String,
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
