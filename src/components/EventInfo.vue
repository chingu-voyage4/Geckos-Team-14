<template>
  <div class="event-info">
      <h1>Event: {{ event.eventName }}</h1>
      <div class="img-container"><img :src="event.imageLink" class="ev-img" :alt="event.imgAlt"></div>
      <div class="info">
        <div class="row"><span class="left-block">Description:</span><span class="right-block">{{ event.description }}</span><br></div>
        <div class="row"><span class="left-block">Date:</span><span class="right-block">{{ event.date }}</span><br></div>
        <div class="row"><span class="left-block">City:</span><span class="right-block">{{ event.city }}</span><br></div>
        <div class="row"><span class="left-block">Address:</span><span class="right-block">{{ event.address }}</span><br></div>
        <div class="row"><span class="left-block">Venue name:</span><span class="right-block">{{ event.venueName }}</span><br></div>
        <div class="row"><span class="left-block">Time:</span><span class="right-block">{{ event.beginTime }} <span v-if="event.endTime!==''">- </span>{{ event.endTime }}</span><br></div>
        <!--<div class="row"><span class="left-block">Company name:</span><span class="right-block">{{ event.company }}</span><br></div>
        <div class="row"><span class="left-block">Price:</span><span class="right-block">{{ event.price }}</span><br></div>
        <div class="row"><span class="left-block">Contact phone:</span><span class="right-block">{{ event.contactPhone }}</span><br></div>-->
        <div class="row"><span class="left-block">Contact email:</span><span class="right-block">{{ event.contactEmail }}</span><br></div>
        <div class="row"><span class="left-block">Map coordinates:</span><span class="right-block">lat: {{event.mapLatitude}}, lon: {{event.mapLongitude}}</span><br></div>
      </div>
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
     
      <router-link to="/" tag = "button" class="cancel-button">Back</router-link>
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
    h1 {
      text-align: center;
    }
    #map {
      width: 100%;
      height: 400px;
    }
    .event-info {
        width: 820px;
        margin: 0 auto;
    }
    .img-container {
      text-align: center;
      margin: 30px 0;
    }
    img {
      max-width: 100%;
    }
    .info {
      margin: 0 auto;
      max-width: 500px;
      margin-bottom: 30px;
    }
    .left-block {
      display: inline-block;
      width: 200px;
      font-weight: 600;
    }
    .right-block {
      max-width: 300px;
      display: inline-block;
      margin-bottom: 10px;
    }
    .cancel-button {
      display: block;
      margin: 30px auto;
    }
    .row {
      display: flex;
      align-items: top;
    }
</style>
