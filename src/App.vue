<template>
  <div id="app">
    helloWorld let work
    <router-view/>
    <button @click="$router.push('/40x4')">xx</button>
    <button @click="sendReq">sq</button>
  </div>
</template>

<script>
import req from "./api/index.js";
export default {
  name: "App",
  created() {
    console.log(req);
  },
  methods: {
    sendReq() {
      req.MOVIE_SUBJECT(26752088);
    }
  }
};
</script>