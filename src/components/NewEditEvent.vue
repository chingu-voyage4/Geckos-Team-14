<template>
  <div class="container">
      <div class="new-event">
        <h1 v-if="this.$route.fullPath=='/new'">New Event</h1>
        <h1 v-else >Edit Event</h1>
        <label for="ev-name">Event Name<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.eventName" id="ev-name">
        <br><br>
        <label for="ev-img">Image link:</label>
        <input type="text" v-model="eventData.imageLink" id="ev-img">
        <br><br>
        <label for="ev-description">Event Description:</label>
        <input type="text" v-model="eventData.description" id="ev-description">
        <br><br>
        <label for="ev-country">Country<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.country" id="ev-country">
        <br><br>
        <label for="ev-city">City<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.city" id="ev-city">
        <br><br>
        <label for="ev-address">Address<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.address" id="ev-address">
        <br><br>
        <label for="ev-date">Date<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.date" id="ev-date">
        <br><br>
        <label for="ev-venueName">Venue Name:</label>
        <input type="text" v-model="eventData.venueName" id="ev-venueName">
        <br><br>
        <label for="ev-beginTime">Begin Time<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.beginTime" id="ev-beginTime">
        <br><br>
        <label for="ev-endTime">End Time:</label>
        <input type="text" v-model="eventData.endTime" id="ev-endTime">
        <br><br>
        <label for="ev-contactName">Contact Name<span class="asterisk">*</span>:</label>
        <input type="text" v-model="eventData.contactName" id="ev-contactName">
        <br><br>
        <label for="ev-contactEmail">Contact Email<span class="asterisk">*</span>:</label>
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
        <p class="fill">Please fill in all the requred<span class="asterisk">*</span> fields to continue.</p>
        <span v-if="this.$route.fullPath=='/new'">
         <button @click="newEventAdded" :disabled="disableCheck">Add new event</button>
         </span>
        <span v-else>
          <button @click="eventEdited" :disabled="disableCheck">Edit event</button>
          <button @click="eventDeleted">Delete event</button>
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
        computed: {
          disableCheck(){
            return  ( ( !this.eventData.eventName || (/^\s+$/).test(this.eventData.eventName) )||
                    ( !this.eventData.country || (/^\s+$/).test(this.eventData.country) ) ||
                    ( !this.eventData.city || (/^\s+$/).test(this.eventData.city) ) ||
                    ( !this.eventData.address || (/^\s+$/).test(this.eventData.address) ) ||
                    ( !this.eventData.date || (/^\s+$/).test(this.eventData.date) ) ||
                    ( !this.eventData.beginTime || (/^\s+$/).test(this.eventData.beginTime) ) ||
                    ( !this.eventData.contactName || (/^\s+$/).test(this.eventData.contactName) ) ||
                    ( !this.eventData.contactEmail || (/^\s+$/).test(this.eventData.contactEmail) ) )
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
                    contactName: '',
                    contactEmail: '',
                    mapLongitude: 0,
                    mapLatitude: 0
                }
            }
            else {
              axios.get(`https://codemeets.herokuapp.com/events/`+ this.$route.params.id)
              .then(response => {
                this.eventData = response.data.event;
              })
              .catch(function (error) {
                console.log(error);
              });
            }
        },
        methods: {
            newEventAdded() {
                this.eventData.imageLink = this.eventData.imageLink||'/src/assets/12.jpg';
                axios.post(`https://codemeets.herokuapp.com/events`, this.eventData, {headers: {'Authorization': sessionStorage.token}})
                .then(response => {
                  this.eventData = response;
                })
                .then(()=>{
                  this.$emit('render');
                  this.$router.push('/')
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            eventEdited() {
                axios.put(`https://codemeets.herokuapp.com/events/`+this.eventData._id, this.eventData, {headers: {'Authorization': sessionStorage.token}})
                .then(()=>{
                  this.$emit('render');
                  this.$router.push('/')
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            eventDeleted() {
                axios.delete(`https://codemeets.herokuapp.com/events/`+this.eventData._id, {headers: {'Authorization': sessionStorage.token}})
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
.asterisk {
  color: #463ac9;
}
</style>
