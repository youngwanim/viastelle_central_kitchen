<template>
  <div v-bind:class="[{'active': tabIndex === 1}, 'tab-contents', 'row']">
    <section class="top">
      <div>section-top</div>
    </section>
    <section class="bottom">
      <div class="title">section-bottom-title</div>
      <div>
        <div>inner table</div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'schedule',
    props: ['tabIndex']
  }
</script>
<style type="scss" scoped>
  .top{
    background-color: #ffe;
    height: 60.0rem;
    border-bottom: 1px solid #9b9b9b;
  }
  .bottom{
    background-color: #fee;
  }
</style>
