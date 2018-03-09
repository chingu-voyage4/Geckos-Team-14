<template>
  <div class="event-info">
      <h1>{{events[this.$route.params.id].name}}</h1>
      <div>{{events[this.$route.params.id].img}}</div>
      <h3>{{ events[this.$route.params.id].description }}</h3>
      <router-link to="/" tag = "button">Back</router-link>
  </div>
</template>

<script>
    export default {
        props: ['events'],
    }
</script>

<style scoped>
    .event-info {
        height: 400px;
        background-color: lightGreen;
        text-align: center;
    }
</style>
