<template>
  <div ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  data() {
    return {
      scroll: null,
      message: "你好啊",
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //   创建
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动
    this.scroll.on("scroll", (position) => {
        // console.log(position);
      this.$emit("scrollpos", position);
    });
    // 下拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit('pullData')
    });
  },
  methods: {

    scrollTo(x, y, time = 300) {
     this.scroll && this.scroll.scrollTo(x, y, time);
    },

    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },

    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },

};
</script>

<style scoped>
</style>