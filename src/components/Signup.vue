<template>
  <div class="container">
    <div class="signup">
      <input type="text" placeholder = "Email" v-model="signupEmail">
      <br>
      <input type="password" placeholder = "Password" v-model="signupPassword">
      <br>
      <input type="password" placeholder = "Confirm password" v-model="signupConfirmPassword">
      <br>
      <router-link to="/" tag = "button" @click.native="signup">Signup</router-link>
      <router-link to="/" tag = "button">Back</router-link>
      <p>
        Already have an account?
        <router-link to="/login" tag = "a">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
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
        //check password and show message if something wrong. i will add that functionality later
        if (this.signupPassword.length < 5 || this.signupPassword!==this.signupConfirmPassword) {
          console.log('weak password or confirm correctly')
        }
        else {
          //check if there's already an account with that email
          //add new user to database, i think POST
          //send email about signup
          //data in this.signupEmail and this.signupPassword
        }
      }
    }
  }
</script>

<style>

</style>