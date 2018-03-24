<template>
  <div class="container">
    <div class="signup">
      <input type="text" placeholder = "Email">
      <br>
      <input type="text" placeholder = "Password">
      <br>
      <input type="text" placeholder = "Confirm password">
      <br>
      <router-link to="/" tag = "button" @click.native="">Back</router-link>
      <p>
        Already have an account?
        <router-link to="/login" tag = "a" @click.native="">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
