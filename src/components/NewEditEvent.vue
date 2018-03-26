<template>
  <div class="container">
      <div class="new-event">
        <label for="ev-name">Event Name:</label>
        <input type="text" v-model="eventData.name" id="ev-name">
        <br><br>
        <label for="ev-img">Image:</label>
        <input type="text" v-model="eventData.img" id="ev-img">
        <br><br>
        <label for="ev-imgAlt">Image alt text:</label>
        <input type="text" v-model="eventData.imgAlt" id="ev-imgAlt">
        <br><br>
        <label for="ev-description">Event Description</label>
        <input type="text" v-model="eventData.description" id="ev-description">
        <br><br>
        <label for="ev-city">City:</label>
        <input type="text" v-model="eventData.city" id="ev-city">
        <br><br>
        <label for="ev-address">Address:</label>
        <input type="text" v-model="eventData.address" id="ev-address">
        <br><br>
        <label for="ev-venueName">Venue Name:</label>
        <input type="text" v-model="eventData.venueName" id="ev-venueName">
        <br><br>
        <label for="ev-beginTime">Begin Time:</label>
        <input type="text" v-model="eventData.beginTime" id="ev-beginTime">
        <br><br>
        <label for="ev-endTime">End Time:</label>
        <input type="text" v-model="eventData.endTime" id="ev-endTime">
        <br><br>
        <label for="ev-company">Company:</label>
        <input type="text" v-model="eventData.company" id="ev-company">
        <br><br>
        <label for="ev-price">Price:</label>
        <input type="text" v-model="eventData.price" id="ev-price">
        <br><br>
        <label for="ev-contactPhone">Contact Phone:</label>
        <input type="text" v-model="eventData.contactPhone" id="ev-contactPhone">
        <br><br>
        <label for="ev-contactEmail">Contact Email:</label>
        <input type="text" v-model="eventData.contactEmail" id="ev-contactEmail">
        <br>
        <p>Find your Latitude and Longitude <a href="https://www.google.com/maps">Google maps</a></p>
        <p>Click on map and you'll see coordinates on the bottom of the page</p>
        <p>Example: Eiffel tower</p> 
        <p>Latitude: 48.858370, Longitude: 2.294486</p>
        <label for="ev-mapLatitude">Map Latitude:</label>
        <input type="text" v-model="eventData.mapLatitude" id="ev-mapLatitude">
        <br><br>
        <label for="ev-mapLongitude">Map Longitude:</label>
        <input type="text" v-model="eventData.mapLongitude" id="ev-mapLongitude">
        <br><br>
        <span v-if="this.$route.fullPath=='/new'">
         <router-link to="/" tag = "button" @click.native="newEventAdded">Add new event</router-link>
         </span>
        <span v-else>
            <router-link to="/" tag = "button" @click.native="eventEdited">Edit event</router-link>
            <router-link to="/" tag = "button" @click.native="eventDeleted">Delete event</router-link>
        </span>
        <router-link to="/" tag = "button" >Cancel</router-link>
      </div>
  </div>
</template>

<script>
    export default {
        props: ['events'],
        data() {
            return {
                eventData: {},
                event: this.$route.params.id
            }
        },
        mounted(){
            if (this.$route.fullPath=='/new'){
                this.eventData = {
                    name: '',
                    img: '',
                    description: '',
                    imgAlt: '',
                    date: '',
                    city: '',
                    address: '',
                    venueName: '',
                    beginTime: '',
                    endTime: '',
                    company: '',
                    price: '',
                    contactPhone: '',
                    contactEmail: '',
                    mapLongitude: 0,
                    mapLatitude: 0
                }
            }
            else {
                this.eventData = this.events[this.event]
            }
        },
        methods: {
            newEventAdded() {
                this.events.push(this.eventData)
                //PUT this.events to database
            },
            eventEdited() {
                this.events[this.id] = this.eventData
                //PUT this.events to database
            },
            eventDeleted() {
                this.events.splice(this.id, 1);
                //PUT this.events to database
            }
        }
    }
</script>

<style scoped>
.new-event {
  width: 60%;
  border: 2px solid lightblue;
  margin: 20px auto;
  padding: 20px;
}
</style>
