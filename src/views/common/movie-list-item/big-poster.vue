<template>
  <div class="m_bigPost">
    <div class="_wrapper">
      <img :src="item.images.large"
           alt="">
    </div>
    <div class="_desc">
      <h2 class="_title">{{item.title}}</h2>
      <p class="_directors">{{item.directors[0].name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigPoster",
  props: {
    item: {
      type: Object,
      require: true
    }
  }
};
</script>

