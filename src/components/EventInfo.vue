<template>
  <div class="event-info container">
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
      <h4>map coordinates: {{event.mapLatitude}} {{event.mapLongitude}}</h4>
    <gmap-map
      :center="latlong"
      :zoom="15"
      :markers = "markers"
      map-type-id="roadmap"
      style="width: 100%; height: 400px"
    >
    <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        />
      </gmap-map>
     
  <br><br>
      <router-link to="/" tag = "button">Back</router-link>
  </div>
</template>

<script>

    export default {
        props: ['events'],
        data(){
          return {  
            place: null,
            event: this.events[this.$route.params.id]
          }
        },
        computed: {
          latlong(){
            return {lat: Number(this.event.mapLatitude), lng: Number(this.event.mapLongitude)}
          },
          markers() {return [{
            position: {lat: Number(this.event.mapLatitude), lng: Number(this.event.mapLongitude)}
          }]}
        }
    }
</script>

<style scoped>
    #map {
      width: 100%;
      height: 400px;
    }
    .event-info {
        background-color: lightGreen;
        text-align: center;
    }
</style>
