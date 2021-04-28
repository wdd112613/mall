<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tab-control1"
      :controlItems="controlItems"
      @tabClick="tabClick"
      v-show="tabShow"
      ref="tabControl2"
    ></tab-control>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollpos="scrollcontent"
      @pullData="pullData"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-menu :recommends="recommends"></home-menu>
      <tab-control
        :controlItems="controlItems"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods :goods="goods[goodstype].list"></goods>
    </scroll>
    <back-top v-show="isShow" @click.native="topTab"></back-top>
  </div>
</template>
 
<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import TabControl from "@/components/content/tabControl/TabControl";
import Goods from "@/components/content/goods/Goods";
import BackTop from "@/components/content/backtop/BackTop";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeMenu from "@/views/home/childComps/HomeMenu";
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      controlItems: ["流行", "最新", "推荐"],
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
      },
      goodstype: "pop",
      isShow: false,
      tabOffsetTop: 0,
      tabShow: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeMenu,
    TabControl,
    Goods,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  mounted() {
    // 重制better-scroll 高度
    this.$bus.$on("imgLoad", () => {
      if (this.$refs.scroll) {
        this.$refs.scroll.refresh();
      }
    });
    setTimeout(() => {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    }, 200);
  },
  methods: {
    // 网络数据请求部分
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },

    // 操作部分
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodstype = "pop";
          break;
        case 1:
          this.goodstype = "sell";
          break;
        case 2:
          this.goodstype = "new";
          break;
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    // 返回顶部
    topTab() {
      // console.log()
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 返回顶部按钮隐藏
    scrollcontent(position) {
      // console.log(-position.y)
      this.isShow = -position.y > 1000;
      this.tabShow = -position.y > this.tabOffsetTop;
      // console.log(position.y);
    },
    // 加载更多
    pullData() {
      this.getHomeGoods(this.goodstype);
    },
  },
};
</script>

<style scoped>
body {
  padding-top: 44px;
  padding-bottom: 49px;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
.scroll {
  position: absolute;
  overflow: hidden;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
}
.tab-control1 {
  position: fixed;
  left: 0;
  top: 44px;
  right: 0;
}
</style>