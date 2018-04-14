<template>
  <div class="navbar">
      <router-link to="/" tag = "a" class="logo">Codemeets</router-link>
      <div class="signup-login">
        <span v-if="login!==''">
          <span>{{login}}</span>
          <a href="/logout"><router-link to="/" tag = "button" class="exit-button" @click.native="exit">Log out</router-link></a>
        </span>
        <span v-else>
        <router-link to="/register" tag = "button">Sign up</router-link>
        <router-link to="/login" tag = "button">Login</router-link>
        </span>
      </div>
  </div>
</template>

<script>
    export default {
      props: ['login'],
      methods: {
        exit() {
          this.$emit('exit');
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
