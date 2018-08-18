<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import req from "./api/index.js";
export default {
  name: "App",
  created() {
    console.log(this.$api);
  },
  methods: {}
};
</script>