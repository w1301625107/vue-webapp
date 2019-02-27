<template>
  <div class="quick_link base_block">
      <divider></divider>
      <header-blcok title="快速链接"
                    :showButton="false"
                    @viewAll="console.log(4)"></header-blcok>
      <p>Vue 中文网</p>
      <p>Webpcak 中文文档</p>
      <p>豆瓣 开放API</p>
      <p>Axios</p>
      <p>Scss~Postcss</p>
    </div>
</template>
<script>
import headerBlcok from "@views/common/header/header-block.vue";
export default {
  name: "FriendlyLink",
  components: { headerBlcok }
}
</script>


