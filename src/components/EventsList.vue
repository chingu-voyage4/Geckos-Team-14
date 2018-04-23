<template>
    <div class="container">
        <ul class="ev-ul">
            <li v-for="event in events" v-if="filter(event)" :key="event.id">
              <router-link :to="'/info/'+event._id" tag="a" class="event-link">
                <div class="event" :style="{backgroundImage: 'url(' + event.imageLink + ')'}">
                  <div class="event-inner">
                    <div class="ev-name">{{ event.eventName }}</div>
                    <br>
                    <div class="event-buttons">
                      <router-link :to="'/info/'+event._id" tag="button" class="event-info">Info</router-link>
                      <router-link :to="'/edit/'+event._id" tag="button" class="event-edit"
                                    v-if="login.id==event.eventOwner">Edit event</router-link>
                    </div>
                    <br>
                  </div>
                </div>
              </router-link>
            </li>
        </ul>
        <router-link to="/new" tag="button" class="add-btn" v-if="this.login">Add New event</router-link>
    </div>
</template>
<script>
    export default {
        props: ['events','login','search'],
        methods: {
          filter(ev){
            for (let i in ev) {
              if (i=='eventCreated'||i=='_id'||i=='eventOwner'||i=='imageLink') continue; 
              if (ev[i].toString().toLowerCase().indexOf(this.search.toLowerCase())>-1) return true;
            }
            return false;
          }
        },
        mounted(){
          this.$emit('showSearch', true)
        },
        beforeDestroy(){
          this.$emit('showSearch', false)
        }
    }
</script>

<style scoped>
    .event {
        width: 400px;
        min-height: 400px;
        margin: 20px;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
        position: relative;
    }

    .event-info {
      margin-right: 20px;
    }
    .event-link {
      text-decoration: none;
    }
    .ev-ul li:last-child {
      margin-bottom: 10px;
    }
    .add-btn {
      margin: 0;
      margin-left: 60px
    }

    .event-inner {
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom: 0;
      background: rgba(0,0,0,.2);
      transition: all .5s;
    }
    .ev-name {
      position: absolute;
      bottom: 0;
      font-size: 40px;
      color: #fff;
      padding: 20px 20px 10px;
      transition: all .5s;
      width: 360px;
      word-wrap: break-word;
    }
    .event-buttons {
      position: absolute;
      padding: 20px;
      bottom: -80px;
      color: #333;
      transition: all .5s;
    }
    .event-inner:hover {
      background: rgba(0,0,0,.4)
    }
    .event-inner:hover .ev-name {
      bottom: 70px;
    }
    .event-inner:hover .event-buttons {
      bottom: 0;
    }
    li {
      width: 33.3%;
    }
    li a {
      display: flex;
      justify-content: center;
    }
    .ev-img {
        height: 300px;
        width: auto;
    }
    .ev-ul {
        position: relative;
        list-style-type: none;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        padding: 0;
    }
    .img-container {
      text-align: center;
    }
</style>