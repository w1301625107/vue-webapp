<template>
   <div class="m-xscroll-big-poster base_block">
      <h3>{{title}}</h3>
      <p>{{describle}}</p>
      <div class="base_scroll">
        <div v-for="item in list"
                 class="_item"
                 :key="item.subject.id">
          <div class="_wrapper">
            <img :src="item.subject.images.large"
                 alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'XScrollBigPoster',
  props:{
    title:String,
    describle:String,
    list:{
      type:Array,
      required:true
    }
  }
}
</script>

<style>

</style>
