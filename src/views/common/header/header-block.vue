<template>
  <h3 class="header_block">{{title}}
    <button v-if="showButton"
            @click="viewAll">{{buttonText}}</button>
  </h3>
</template>

<script>
export default {
  name: "headerBlock",
  props: {
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "查看全部"
    },
    showButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    viewAll() {
      console.log(this.title + this.buttonText);
      this.$emit("viewAll");
    }
  }
};
</script>

<style>
</style>
