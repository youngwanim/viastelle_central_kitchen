<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    localStorage.clear()
  }
}
</script>

<style lang="scss">
  @import './style/main.scss';
</style>
