<template>
  <div class="goods">
    <goods-items
      v-for="(item, index) in goods"
      :key="index"
      :item="item"
    ></goods-items>
  </div>
</template>

<script>
import GoodsItems from "@/components/content/goods/GoodsItems";
export default {
  components: {
    GoodsItems,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods{
    background:#fff;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
}
</style>