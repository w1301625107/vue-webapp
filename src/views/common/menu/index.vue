<template>
  <div class="menu_bar">
    <section v-for="item in menuList"
             :key="item.path"
             @click="activeItem(item)">
      <div class="_icon"
           :class="[item.class,{ '_act': item.act }]">
      </div>
      <span :class="[{ '_act': item.act }]">{{item.path}}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      menuList: [
        {
          path: "Hot",
          class: "_hot",
          act: false,
          to: "/"
        },
        {
          path: "All",
          class: "_all",
          act: false,
          to: "/rank"
        },
        {
          path: "Star",
          class: "_star",
          act: false,
          to: "/top250"
        },
        {
          path: "Me",
          class: "_my",
          act: false,
          to: ""
        },
        {
          path: "Search",
          class: "_search",
          act: false,
          to: ""
        }
      ]
    };
  },
  methods: {
    activeItem(item) {
      console.log(item);
      this.resetActive();
      item.act = true;
      this.$router.push(item.to);
    },
    resetActive() {
      this.menuList.forEach(v => {
        v.act = false;
      });
    }
  }
};
</script>
