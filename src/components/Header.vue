<template>
  <div class="navbar">
      <div class="logo">Our logo</div>
      <div class="signup-login">
        <router-link to="/signup" tag = "button" @click.native="">Sign up</router-link>
        <router-link to="/login" tag = "button" @click.native="">Login</router-link>
      </div>
  </div>
</template>

<script>
    export default {

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
