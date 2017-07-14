<template>
  <table v-bind:class="[{'round': typeof caption === 'undefined'}, 'table']">
    <caption v-if="typeof caption !== 'undefined'">
      {{caption}}
    </caption>
    <thead>
      <tr>
        <th v-for="head in header">
          <h5>{{head.cn}}</h5>
          {{head.en}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="value in body">
        <td v-for="(item, key) in value">
          <span v-if="key!==textType">{{item}}</span>
          <input class="form-control label-small-round text-center" v-if="key===textType" type="text" :value="item">
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'formTable',
    props: {
      caption: {
        type: String,
        required: false
      },
      header: {
        type: Object,
        required: false
      },
      body: {
        type: Array,
        required: true
      },
      textType: {
        type: String,
        required: true
      }
    }
  }
</script>
<style type="scss" scoped>
  .table{
    width: 70%;
    padding: 0rem 1.5rem;
    border: 1px solid #979797;
    border-bottom-left-radius: 1.9rem;
    border-bottom-right-radius: 1.9rem;
  }
  .table > caption {
    background-color: #727272;
    padding: 0rem 2.0rem;
    font-size: 3.0rem;
    height: 5.7rem;
    line-height: 5.7rem;
    color:#fff;
    border-top-left-radius: 1.9rem;
    border-top-right-radius: 1.9rem;
    border-bottom: 1px solid #9b9b9b;
  }
  .table > thead > tr > th,
  .table > tbody > tr> td {
    border-bottom: 1px solid #9b9b9b;
  }
  .table > thead > tr > th{
    font-weight: 600;
  }
  .table > tbody > tr> td {
    font-size: 3.6rem;
    font-weight: 500;
  }
  .table > tbody > tr:last-child> td {
    border-bottom: 0rem;
    border-bottom-left-radius: 1.9rem;
    border-bottom-right-radius: 1.9rem;
  }
  .round{
    border-top-left-radius: 1.9rem;
    border-top-right-radius: 1.9rem;
  }
  .round > thead > tr > th{
    border-top-left-radius: 1.9rem;
    border-top-right-radius: 1.9rem;
  }
  .highlight{
    background-color: #eef;
  }
</style>
