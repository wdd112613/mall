<template>
  <div class="good-items" @click="detailTab">
    <div class="good-pic">
      <img :src="item.showLarge.img" alt="" @load="imgLoad" />
    </div>
    <div class="goods-info">
      <div class="goods-name textover">{{ item.title }}</div>
      <div class="goods-text">购买量：{{ item.cfav }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('imgLoad')
    },
    detailTab(){
      this.$router.push({
        path:'/detail',
        query:{
          id:1
        }
      })
    }
  }
};
</script>

<style>
.good-items {
  width: 48%;
  margin-bottom: 10px;
}
.goods-name {
  line-height: 1.5;
}
.goods-text {
  font-size: 12px;
  margin-top: 4px;
  line-height: 1.5;
  color: #999;
}
</style>