<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="Email ID"/>
    <br>
    <input v-model="password" type="Password" name="Password" placeholder="Password" />
    <br>
    <button @click="Send">Submit</button>
  </div>
</template>
<script>
import Authentication from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async Send () {
      const response = await Authentication.register({
        email: this.email,
        password: this.password
      })
      console.log('You are register with site', response.data)
    }
  }
}
</script>
<style>
</style>
