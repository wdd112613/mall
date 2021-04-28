<template>
  <van-swipe :autoplay="3000" indicator-color="#ff5777">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img v-lazy="item.image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>