<template>
  <div class="tab-bar-item" @click="itemTab">
    <div class="tab-bar-icon">
      <slot v-if="!isActive" name="tab-bar-icon"></slot>
      <slot v-else name="tab-bar-icon-active"></slot>
    </div>
    <div class="tab-bar-text" :style="itemColor">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemTab() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    itemColor(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.tab-bar-icon {
  margin-top: 6px;
}
.tab-bar-icon img {
  width: 22px;
  vertical-align: middle;
}
.tab-bar-text {
  margin-top: 4px;
}
</style>