<template>
  <div>
    <div class="signup">
      <input type="text" placeholder = "Email">
      <br>
      <input type="text" placeholder = "Password">
      <br>
      <input type="text" placeholder = "Confirm password">
      <br>
      <router-link to="/" tag = "button" @click.native="">Back</router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .signup, .login {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  .signup input,
  .login input {
    width: 100%;
    padding: 5px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }
</style>
