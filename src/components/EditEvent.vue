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
        <span v-if="true /*eventNum==-1*/">
         <button class="add-btn" @click="newEventAdded">Add event</button>
         <router-link to="/" tag = "button" @click.native="newEventAdded"><a>Add new event</a></router-link>
         </span>
        <span v-else>
            <button class="add-btn" @click="eventEdited">Edit event</button>
            <button class="add-btn" @click="eventDeleted">Delete event</button>
        </span>
        <button class="add-btn" @click="cancelAddEdit">Cancel</button>
      </div>
  </div>
</template>

<script>
    export default {
        props: ['events', 'eventNum'],
        data() {
            return {
                eventData: {
                    name: '',
                    img: '',
                    description: '' }
            }
        },
        mounted(){
            if (this.eventNum>-1){
                this.eventData = {
                    name: this.events[this.eventNum].name,
                    img: this.events[this.eventNum].img,
                    description: this.events[this.eventNum].description
                }
            }
            else {
                this.eventData = {
                    name: '',
                    img: '',
                    description: '' }
            }
        },
        methods: {
            newEventAdded() {
                /*this.$emit('newEventAdded', this.eventData);
                console.log('hiii')*/
                this.events.push(this.eventData)
            },
            eventEdited() {
                this.$emit('eventEdited', this.eventData, this.eventNum)
            },
            eventDeleted() {
                this.$emit('eventDeleted', this.eventNum)
            },
            cancelAddEdit() {
                this.$emit('reset')
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
