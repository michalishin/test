<template lang="pug">
  div.login
    div.box
      div.logo
      form.login-form
        base-form-item.user-input(label="Логин" name="username")
          base-input(v-model="login")
        base-form-item.password-input(label="Пароль" name="password")
          base-input(type="password" placeholder="******************" v-model="password")
        div.buttons-wrap
          base-button(@click="submit", v-loading="inLogin") Вход
    p.copiright ©2018 Creditexpress. All rights reserved.
</template>

<script>
  import Cookie from 'js-cookie'
  import authService from '~/services/auth'

  export default {
    middleware: 'notAuthenticated',
    layout: 'centered',
    data () {
      return {
        login: '',
        password: '',
        inLogin: false
      }
    },
    methods: {
      async submit () {
        this.inLogin = true
        const auth = await authService.login(this.login, this.password)
        this.$store.commit('update', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
        this.inLogin = false
      }
    }
  }
</script>
