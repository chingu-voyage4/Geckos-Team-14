<template>
  <div class="navbar">
      <div class="logo">Our logo</div>
      <div class="signup-login">
        <span v-if="login!==''">
          <span>{{login}}</span>
          <router-link to="/" tag = "button" @click.native="exit">Log out</router-link>
        </span>
        <span v-else>
        <router-link to="/signup" tag = "button">Sign up</router-link>
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
    border: 1px solid green;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo, 
  .signup-login {
    margin: 0 40px;
  }
</style>
