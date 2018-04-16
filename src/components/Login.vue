<template>
  <div class="container">
    <div class="login">
      <input type="text" placeholder = "Email" v-model = "loginEmail">
      <br>
      <input type="password" placeholder = "Password" v-model = "loginPassword">
      <br>
      <button @click="login">Login</button>
      <router-link to="/" tag = "button" class="cancel-button">Back</router-link>
      <br><br>
      <p>
        <router-link to="/reset-password" tag = "a">Forgot your username or password?</router-link>
      </p>
      <p>
        Don't have an account?
        <router-link to="/register" tag = "a">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data(){
      return {
        loginEmail: '',
        loginPassword: ''
      }
    },
    methods: {
      login() {
          axios.post(`https://codemeets.herokuapp.com/login`, 
          {
            email: this.loginEmail,
            password: this.loginPassword
          })
          .then(response => {
            console.log(response);
            console.log(response.data, this.loginEmail)
            this.$emit('login', {id: response.data, email: this.loginEmail});
          })
          .then(()=>{
            this.$router.push('/')
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
  }
</script>