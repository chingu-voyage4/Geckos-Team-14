<template>
  <div class="event-info">
      <h1>Event name: {{ event.name }}</h1>
      <img :src="event.img" class="ev-img" :alt="event.imgAlt">
      <h3>Description: {{ event.description }}</h3>
      <h3>Date: {{ event.date }}</h3>
      <h3>City: {{ event.city }}</h3>
      <h3>Address: {{ event.address }}</h3>
      <h3>Venue name: {{ event.venueName }}</h3>
      <h4>Time: {{ event.beginTime }} <span v-if="event.endTime!==''">-</span> {{ event.endTime }}</h4>
      <h4>Company name: {{ event.company }}</h4>
      <h4>Price: {{ event.price }}</h4>
      <h4>Contact: {{ event.contactPhone }}</h4>
      <h4>map coords: {{event.mapLongitude}}, {{event.mapLatitude}}</h4>
      <router-link to="/" tag = "button">Back</router-link>
  </div>
</template>

<script>
    export default {
        props: ['events'],
        data(){
          return {
            event: this.events[this.$route.params.id]
          }
        }
    }
</script>

<style scoped>
    .event-info {
        background-color: lightGreen;
        text-align: center;
    }
</style>
