<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#ff5777">
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img
        slot="tab-bar-icon-active"
        src="@/assets/img/tabbar/home-active.svg"
        alt=""
      />
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort" activeColor="#ff5777">
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/sort.svg" alt="" />
      <img
        slot="tab-bar-icon-active"
        src="@/assets/img/tabbar/sort-active.svg"
        alt=""
      />
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#ff5777">
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="tab-bar-icon-active"
        src="@/assets/img/tabbar/cart-active.svg"
        alt=""
      />
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/user" activeColor="#ff5777">
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/user.svg" alt="" />
      <img
        slot="tab-bar-icon-active"
        src="@/assets/img/tabbar/user-active.svg"
        alt=""
      />
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>