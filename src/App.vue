<template>
  <div id="app">
    <div class="base_wrapper">
      <router-view/>
    </div>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import MenuBar from "@views/common/menu/index.vue";
export default {
  name: "App",
  components: { MenuBar },
  // mounted() {
  //   console.log(this.$api);
  //   document.querySelector(".base_wrapper").style.height =
  //     window.innerHeight -
  //     document.querySelector(".menu_bar").offsetHeight +
  //     "px";
  // },
  methods: {}
};
</script>