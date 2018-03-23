<template>
  <div>
      <h1>this is header</h1>
      <router-link to="/signup" tag = "button" @click.native="">Sign up</router-link>
      <router-link to="/login" tag = "button" @click.native="">Login</router-link>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        border: 1px solid green;
        text-align: center;
    }
</style>
