<template>
  <div class="container">
    <div class="signup">
      <input type="text" placeholder = "Email" v-model="signupEmail">
      <br>
      <input type="password" placeholder = "Password" v-model="signupPassword">
      <br>
      <input type="password" placeholder = "Confirm password" v-model="signupConfirmPassword">
      <br>
      <!--<router-link to="/" tag = "button" @click.native="signup">Signup</router-link>-->
      <button @click="signup">Signup</button>
      <router-link to="/" tag = "button" class="cancel-button">Back</router-link>
      <p><br>
        Already have an account?
        <router-link to="/login" tag = "a">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        signupEmail: '',
        signupPassword: '',
        signupConfirmPassword: ''
      }
    },
    methods: {
      signup() {
        if (this.signupPassword.length < 2 || this.signupPassword!==this.signupConfirmPassword) {
          console.log('weak password or confirm correctly')
        }
        else {
          axios.post(`https://codemeets.herokuapp.com/register`, 
          {
            email: this.signupEmail,
            password: this.signupPassword,
            confirmPassword: this.signupConfirmPassword
          })
          .then(response => {
            console.log(response);
            this.$emit('register', {id: response.data, email: this.signupEmail});
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
  }
</script>

<style>

</style>