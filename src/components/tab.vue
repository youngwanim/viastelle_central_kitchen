<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>
<script>
  import { parentMixin } from '../mixin/multi-item'
  export default {
    name: 'tab',
    mixins: [parentMixin]
  }
</script>
<style></style>
