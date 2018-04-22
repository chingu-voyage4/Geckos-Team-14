<template>
  <div class="container">
    <div class="login">
      <input type="email" placeholder = "Email" v-model = "loginEmail">
      <br>
      <input type="password" placeholder = "Password" v-model = "loginPassword">
      <br>
      <span class="fill">Please fill in email and password fields to continue.</span>
                  <br><br>
      <button @click="login" :disabled="disableCheck">Login</button>
      <router-link to="/" tag = "button" class="cancel-button">Back</router-link>
      <br><br>
      <!--<p>
        <router-link to="/reset-password" tag = "a">Forgot your username or password?</router-link>
      </p>-->
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
    computed: {
      disableCheck() {
        return  (!this.loginEmail || (/^\s+$/).test(this.loginEmail)) ||
                (!this.loginPassword || (/^\s+$/).test(this.loginPassword))
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
                      /*  console.log(response);
            ///console.log(response.data);
            console.log(response.data.token);
            sessionStorage.token = response.data.token;
            this.$emit('register', {id: response.data.userId, email: this.signupEmail});
*/
            console.log(response);
            ///console.log(response.data);
            //console.log(response.data.id.token);
            sessionStorage.token = response.data.token;
            this.$emit('login', {id: response.data.userId, email: this.loginEmail});
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