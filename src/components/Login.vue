<template>
  <div class="container">
    <div class="login">
      <input type="text" placeholder = "Email">
      <br>
      <input type="text" placeholder = "Password">
      <br>
      <router-link to="/" tag = "button" @click.native="">Back</router-link>
      <p>
        <router-link to="/reset-password" tag = "a">Forgot your username or password?</router-link>
      </p>
      <p>
        Don't have an account?
        <router-link to="/signup" tag = "a" @click.native="">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>