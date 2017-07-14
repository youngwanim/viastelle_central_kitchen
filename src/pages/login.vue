<template>
  <div class="body--login">
    <div class="col-12">
      <div class="loginPanel">
        <div class="login_header">
          <h3 class = "text-center">{{ lang.title }}</h3>
          <div class="text-warning text-center" v-if="errorMsg">
            <h6>{{ lang.login.error[0] }}</h6>
            <h6>{{ lang.login.error[1] }}</h6>
          </div>
        </div>
        <div class="login_section">
          <input type="text" :placeholder="lang.login.holder_loging" class="form-control form-control-ghost" ref="id" v-on:keyup.13="onSubmit">
          <input type="password" :placeholder="lang.login.holder_pw" class="form-control form-control-ghost" ref="pwd" v-on:keyup.13="onSubmit">
        </div>
        <div class="login_footer">
          <div class="col-12 text-center">
            <button type="submit" @click="onSubmit" class="button button-default text-uppercase text-bold reduce-rounded">{{ lang.login.sign }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import lang from '../locale'
  export default {
    name: 'login',
    data () {
      return {
        lang: lang,
        errorMsg: false
      }
    },
    methods: {
      onSubmit (e) {
        this.$router.push('home')
      }
    }
  }
</script>
<style></style>
