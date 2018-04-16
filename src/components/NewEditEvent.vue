<template>
  <div class="container">
      <div class="new-event">
        <h1 v-if="this.$route.fullPath=='/new'">New Event</h1>
        <h1 v-else >Edit Event</h1>
        <label for="ev-name">Event Name:</label>
        <input type="text" v-model="eventData.eventName" id="ev-name">
        <br><br>
        <label for="ev-img">Image:</label>
        <input type="text" v-model="eventData.imageLink" id="ev-img">
        <br><br>
        <!--<label for="ev-imgAlt">Image alt text:</label>
        <input type="text" v-model="eventData.imgAlt" id="ev-imgAlt">
        <br><br>-->
        <label for="ev-description">Event Description:</label>
        <input type="text" v-model="eventData.description" id="ev-description">
        <br><br>
        <label for="ev-country">Country:</label>
        <input type="text" v-model="eventData.country" id="ev-country">
        <br><br>
        <label for="ev-city">City:</label>
        <input type="text" v-model="eventData.city" id="ev-city">
        <br><br>
        <label for="ev-address">Address:</label>
        <input type="text" v-model="eventData.address" id="ev-address">
        <br><br>
        <label for="ev-date">Date:</label>
        <input type="text" v-model="eventData.date" id="ev-date">
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
        <!--<label for="ev-company">Company:</label>
        <input type="text" v-model="eventData.company" id="ev-company">
        <br><br>
        <label for="ev-price">Price:</label>
        <input type="text" v-model="eventData.price" id="ev-price">
        <br><br>
        <label for="ev-contactPhone">Contact Phone:</label>
        <input type="text" v-model="eventData.contactPhone" id="ev-contactPhone">
        <br><br>-->
        <label for="ev-contactName">Contact Name:</label>
        <input type="text" v-model="eventData.contactName" id="ev-contactName">
        <br><br>
        <label for="ev-contactEmail">Contact Email:</label>
        <input type="text" v-model="eventData.contactEmail" id="ev-contactEmail">
        <br><br>
        <p>Find your Latitude and Longitude <a href="https://www.google.com/maps">Google maps</a></p>
        <p>Click on map and you'll see coordinates on the bottom of the page</p>
        <p>Example: Eiffel tower</p> 
        <p>Latitude: 48.858370, Longitude: 2.294486</p>
        <br>
        <label for="ev-mapLatitude">Map Latitude:</label>
        <input type="text" v-model="eventData.mapLatitude" id="ev-mapLatitude">
        <br><br>
        <label for="ev-mapLongitude">Map Longitude:</label>
        <input type="text" v-model="eventData.mapLongitude" id="ev-mapLongitude">
        <br><br>
        <span v-if="this.$route.fullPath=='/new'">
         <!--<router-link to="/" tag = "button" @click.native="newEventAdded">Add new event</router-link>-->
         <button @click="newEventAdded">Add new event</button>
         </span>
        <span v-else>
          <button @click="eventEdited">Edit event</button>
          <button @click="eventDeleted">Delete event</button>
            <!--<router-link to="/" tag = "button" @click.native="eventEdited">Edit event</router-link>
            <router-link to="/" tag = "button" @click.native="eventDeleted">Delete event</router-link>-->
        </span>
        <router-link to="/" tag = "button" class="cancel-button">Cancel</router-link>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

    export default {
        props: ['events','login'],
        data() {
            return {
                eventData: {},
                id: this.$route.params.id
            }
        },
        mounted(){
            if (this.$route.fullPath=='/new'){
                this.eventData = {
                    eventName: '',
                    imageLink: '',
                    description: '',
                    date: '',
                    country: '',
                    city: '',
                    address: '',
                    venueName: '',
                    beginTime: '',
                    endTime: '',
                    /*company: '',
                    price: '',
                    contactPhone: '',*/
                    contactName: '',
                    contactEmail: '',
                    mapLongitude: 0,
                    mapLatitude: 0,
                    eventOwner: this.login.id,//"unknown",//this.login.id,
                    user: this.login.id//"unknown"
                }
            }
            else {
                this.eventData = this.events[this.id]
            }
        },
        methods: {
            newEventAdded() {
                //console.log(this.login.id, this.eventData);
                //this.eventData.user = this.login.id;
                this.eventData.user = "unknown";//this.login.email;
                axios.post(`https://codemeets.herokuapp.com/events`, this.eventData)
                .then(response => {
                  console.log(response);
                  this.events.push(this.eventData);
                })
                .then(()=>{
                  this.$emit('render');
                  this.$router.push('/')
                })
                .catch(function (error) {
                  console.log(error);
                });
                /*axios.post('https://codemeets.herokuapp.com/events', this.eventData)*/
                //PUT this.events to database
            },
            eventEdited() {
                //this.events[this.id] = this.eventData;
                this.eventData.user = "unknown";
                axios.get(`https://codemeets.herokuapp.com/events`)
                .then(response => {
                  console.log(response)
                })
                axios.put(`https://codemeets.herokuapp.com/events/`+this.events[this.id]._id,this.eventData)
                .then(response => {
                  console.log(response)
                })
                .then(()=>{
                  this.$emit('render');
                  this.$router.push('/')
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            eventDeleted() {
                //this.events.splice(this.id, 1);
                axios.delete(`https://codemeets.herokuapp.com/events/`+this.events[this.id]._id)
                .then(response => {
                  console.log(response)
                })
                .then(()=>{
                  this.$emit('render');
                  this.$router.push('/')
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
h1 {
  color: #333;
  margin-bottom: 30px;
}
.new-event {
  width: 820px;
  margin: 20px auto;
  padding: 20px;
}
label{
  display: inline-block;
  width: 200px;
}
input {
  width: 600px;
  margin-bottom: 0;
}
button {
  margin-top: 30px;
}
.cancel-button {
  margin-left: 10px;
}
</style>
