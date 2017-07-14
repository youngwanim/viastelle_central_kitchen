<template>
  <div v-bind:class="[{'active': tabIndex === 0}, 'tab-contents', 'row']">
    <header>
      <div class="top-Info">
        <span>2016.05.23</span>
        <span>&nbsp;&#47;&nbsp;</span>
        <span>星期三</span>
      </div>
      <div class="bottom-Info">
        <div class="col-10">
          <h1>15:30</h1>
        </div>
        <div class="col-2 calendar">
          <div class="calendar-item">
            <div class="calendar-btn">
              <h5>{{lang.cn.currentDate}}</h5>
              {{lang.en.currentDate}}
            </div>
          </div>
          <div class="calendar-item">image</div>
        </div>
      </div>
    </header>
    <section>
      <div class="title">
        <h3>{{lang.cn.records_title}}</h3>
        <h6>{{lang.en.records_title}}</h6>
      </div>
      <div>
        <form-table :header="lang.records" :body="dummy" :textType="'actual'"></form-table>
      </div>
    </section>
    <section>
      <div class="title">
        <h3>{{lang.cn.plan_title}}</h3>
        <h6>{{lang.en.plan_title}}</h6>
      </div>
      <div>
        <form-table :caption="'静安Hub'" :header="lang.plan" :body="dummy" :textType="'plan'"></form-table>
      </div>
    </section>
  </div>
</template>
<script>
  import lang from '../locale'
  import formTable from '../components/form-table'
  export default {
    name: 'production',
    props: ['tabIndex'],
    components: {
      'form-table': formTable
    },
    data () {
      return {
        lang: lang.production,
        dummy: [
          {menu: '01', plan: '85', actual: '85', sold: '77', stock: '7'},
          {menu: '05', plan: '50', actual: '45', sold: '44', stock: '1'},
          {menu: '08', plan: '60', actual: '60', sold: '60', stock: '0'},
          {menu: '12', plan: '55', actual: '50', sold: '50', stock: '0'},
          {menu: '18', plan: '60', actual: '60', sold: '55', stock: '5'},
          {menu: '20', plan: '100', actual: '100', sold: '80', stock: '20'},
          {menu: '21', plan: '50', actual: '45', sold: '42', stock: '3'},
          {menu: '23', plan: '50', actual: '45', sold: '40', stock: '5'}
        ]
      }
    }
  }
</script>
<style type="scss" scoped>
  header {
    height: 15.0rem;
  }
  .top-Info {
    height: 6.0rem;
    font-size: 2.2rem;
  }
  .bottom-Info {
    height: 9.0rem;
  }
  .calendar {
    display: table;
    text-align: right;
  }
  .calendar-item{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .calendar-btn{
    border-radius: 0.3rem;
    color: #9b9b9b;
    background-color: #d8d8d8;
    height: 4.5rem;
    width: 9.2rem
  }
</style>
