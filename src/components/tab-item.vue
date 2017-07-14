<template>
  <a class="tab-item" :class="{'active': currentIndex === $parent.currentIndex}" @click="onItemClick">
    <slot></slot>
  </a>
</template>
<script>
  import { childMixin } from '../mixin/multi-item'
  export default {
    name: 'tab-item',
    mixins: [childMixin]
  }
</script>
<style></style>
