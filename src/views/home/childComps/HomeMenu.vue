<template>
  <div class="secondary-menu">
    <div class="menu-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="menu-text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.secondary-menu {
  display: flex;
  padding: 10px 0;
  background:#fff;
  margin-bottom:10px;
}
.menu-item {
  flex: 1;
  padding: 0 10px;
}
.menu-text {
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  margin-top:5px;
}
</style>