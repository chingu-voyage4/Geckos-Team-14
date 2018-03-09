<template>
  <div>
      <div class="new-event">
        <label for="evName">Event Name:</label>
        <input type="text" v-model="eventData.name" id="evName">
        <br>
        <br>
        <label for="evImg">Image:</label>
        <input type="text" v-model="eventData.img" id="evImg">
        <br>
        <br>
        <label for="evDesc">Event Description</label>
        <input type="text" v-model="eventData.description" id="evDesc">
        <br>
        <br>
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
                id: this.$route.params.id
            }
        },
        mounted(){
            if (this.$route.fullPath=='/new'){
                this.eventData = {
                    name: '',
                    img: '',
                    description: '' }
            }
            else {
                this.eventData = {
                    name: this.events[this.id].name,
                    img: this.events[this.id].img,
                    description: this.events[this.id].description
                    }
            }
        },
        methods: {
            newEventAdded() {
                this.events.push(this.eventData)
            },
            eventEdited() {
                this.events[this.id] = this.eventData
            },
            eventDeleted() {
                this.events.splice(this.id, 1);
            }
        }
    }
</script>

<style scoped>
.new-event {
  height: 400px;
  width: 60%;
  border: 1px solid lightblue;
  margin: 20px auto;
  padding: 20px;
}
</style>
