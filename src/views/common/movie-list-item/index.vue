<template>
  <section :key="item.id"
           class="movie_list_item">
    <div class="_img_wrapper">
      <img :src="item.images.large"
           alt="">
    </div>
    <div class="_desc">
      <div>
        <p>{{item.title}}</p>
        <p>{{item.directors[0].name}}</p>
      </div>
      <div>
        <button class="button_base button_cls2">详情</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "movieListItem",
  props: {
    item: {
      type: Object,
      require: true
    }
  }
};
</script>

<style>
</style>
