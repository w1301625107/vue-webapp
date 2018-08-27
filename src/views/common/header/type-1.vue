<template>
  <header class="header_one">
    <div v-if="fixTop" class="_cover"><p>{{title}}</p></div>
    <p class="extra">{{extra}}</p>
    <h1>{{title}}</h1>
    <divider></divider>
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
    },
    //开启标题置顶
    fixTop:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    if(this.fixTop){
      window.addEventListener("scroll", this.handleScroll)
    this.$once('hook:beforeDestroy',()=>{
      window.removeEventListener("scroll", this.handleScroll)
    })
    }
  },
  methods:{
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let header=document.querySelector('.header_one')
      let paddingTop=document.querySelector('.header_one').offsetTop
      let headerHeight = header.clientHeight;
      let cover= document.querySelector('.header_one ._cover');
      //文字显示
      if(scrollTop-paddingTop>headerHeight-40-paddingTop){
       cover.classList.add("_show")
      }else{
        cover.classList.remove("_show")
      }
      //底部border显示
      if(scrollTop-paddingTop>headerHeight-25-paddingTop){
        cover.classList.add("_border")
      }else{
        cover.classList.remove("_border")
      }
    }
   }
}
</script>

