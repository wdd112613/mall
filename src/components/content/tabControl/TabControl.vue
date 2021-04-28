<template>
  <div class="tab-control">
    <div
      class="control-item"
      v-for="(item, index) in controlItems"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="activeTab(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    controlItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    activeTab(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  height: 48px;
  background: #fff;
  display: flex;
  font-size: 14px;
  position:relative;
  z-index:9;
}
.control-item {
  flex: 1;
  text-align: center;
  line-height: 44px;
}
.control-item span {
  padding: 5px;
}
.active span {
  color: var(--color-tint);
  border-bottom: 2px solid var(--color-tint);
}
</style>