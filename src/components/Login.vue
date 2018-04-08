<template>
  <div class="container">
    <div class="login">
      <input type="text" placeholder = "Email" v-model = "loginEmail">
      <br>
      <input type="text" placeholder = "Password" v-model = "loginPassword">
      <br>
      <router-link to="/" tag = "button" @click.native="login">Login</router-link>
      <router-link to="/" tag = "button" class="cancel-button">Back</router-link>
      <br><br>
      <p>
        <router-link to="/reset-password" tag = "a">Forgot your username or password?</router-link>
      </p>
      <p>
        Don't have an account?
        <router-link to="/signup" tag = "a" @click.native="login">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        loginEmail: '',
        loginPassword: ''
      }
    },
    methods: {
      login() {
        //check database for that login
        //and then login
        //data in this.loginEmail, this.loginPassword
        //if (success) this.$emit('login', this.loginEmail)
      }
    }
  }
</script>