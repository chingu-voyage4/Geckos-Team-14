<template>
  <div class="navbar">
      <router-link to="/" tag = "a" class="logo">Codemeets</router-link>
      <div class="signup-login">
        <span v-if="login!==''">
          <span>{{login.email}}</span>
          <button class="exit-button" @click="exit">Log out</button>
        </span>
        <span v-else>
        <router-link to="/register" tag = "button">Sign up</router-link>
        <router-link to="/login" tag = "button">Login</router-link>
        </span>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

    export default {
      props: ['login'],
      methods: {
        exit() {
          axios.get(`https://codemeets.herokuapp.com/logout`)
          .then(response => {
            this.$emit('exit');
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

<style scoped>
  .navbar {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .signup-login {
    margin: 0 60px;
  }
  .logo {
    color: #463ac9;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    margin: 0 60px;
  }
  .exit-button {
    margin-left: 20px;
  }
</style>
