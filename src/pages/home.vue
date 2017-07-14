<template>
  <div class="container">
    <div class="col-12">
      <div class="bodyPanel">
        <tab v-model="tabIndex">
          <tab-item class="text-center">
            <div>{{lang.production.cn.title}}</div>
            <div>{{lang.production.en.title}}</div>
          </tab-item>
          <tab-item class="text-center">
            <div>{{lang.schedule.cn.title}}</div>
            <div>{{lang.schedule.en.title}}</div>
          </tab-item>
        </tab>
        <div class="hub-info">静安CK</div>
        <section>
          <production v-if="tabIndex === 0" :tabIndex="tabIndex"></production>
          <schedule v-if="tabIndex === 1" :tabIndex="tabIndex"></schedule>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
  import lang from '../locale'
  import tab from '../components/tab'
  import tabItem from '../components/tab-item'
  import production from './production'
  import schedule from '../pages/schedule'
  export default {
    name: 'home',
    components: {
      'tab': tab,
      'tab-item': tabItem,
      'production': production,
      'schedule': schedule
    },
    data () {
      return {
        lang: lang,
        tabIndex: 0
      }
    }
  }
</script>
<style type="scss" scoped>
  .hub-info{
    position: absolute;
    height: 4.5rem;
    margin-top: -4.6rem;
    right: 0;
    font-size: 2.6rem;
  }
</style>
