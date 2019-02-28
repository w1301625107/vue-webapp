<template>
  <div class="m-list-item_wrapper">
    <div :key="item.id"
             :class="[itemCls]">
      <div class="_img_wrapper">
        <img :src="item.images.large"
             alt="">
      </div>
      <p class="_title">{{item.title}}</p>
      <p class="_director">{{item.directors[0].name}}</p>
      <p v-if="clsType=='type2'"
         class="_pubdate">{{item.pubdates[0]}}</p>
      <p v-if="clsType=='type2'"
         class="_desc">预订</p>
      <button class="button_base button_cls2 _button"
              @click="$router.push(`/item/${item.id}`)">详情</button>
      <div class="_divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieListItem",
  props: {
    item: {
      type: Object,
      require: true
    },
    clsType: {
      type: String,
      default: "type1"
    }
  },
  data() {
    return {
      itemCls: ""
    };
  },
  created() {
    this.itemCls =
      this.clsType == "type2" ? "m-list-item_2" : "m-list-item";
  }
};
</script>
