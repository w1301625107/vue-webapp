<template>
  <div class="header_return">
    <span @click="$router.go(-1)">
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "headerReturn"
};
</script>

<style>
</style>
