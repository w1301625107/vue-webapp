<template>
  <header class="header_one">
    <p class="extra">{{extra}}</p>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "headerOne",
  props: {
    extra: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      require: true
    }
  }
};
</script>

