<template>
  <div>
    <app-header @exit="logOut"
                :login="login"></app-header>
    <transition name = "fade"
                mode = "out-in" 
                appear
                @login="authorisation" >
        <router-view :events="events"></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'

export default {
  data() {
      return {
        events: [],
        login: 'currentLogin'
      }
  },
  methods: {
    authorisation(data) {
      this.login = data
    },
    logOut(){
      this.login = ''
    }
  },
  mounted(){
    axios.get(`https://codemeets.herokuapp.com/events`)
    .then(response => {
      this.events = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    //fetch events data from database, and then
    //this.events = data
    //delete lines 36-90
    /*this.events = [{
            name: 'ev1',
            img: '/src/assets/12.jpg',
            imgAlt: 'logo1',
            description: 'desc1',
            date: '20.04.2018',
            city: 'San Francisco, Ca 94102 United States',
            address: '150 Anza Blvd',
            venueName: 'Embassy Suites - Burlingame',
            beginTime: '11:30 AM',
            endTime: '2:00 PM',
            company: 'Google',
            price: '1$',
            contactPhone: '123456789',
            contactEmail: 'email@email.com',
            mapLatitude: 48.858370,
            mapLongitude: 2.294486
          },
          {
            name: 'ev2',
            img: '/src/assets/logo.png',
            imgAlt: 'logo2',
            description: 'desc2',
            date: '20.04.2018',
            city: 'San Francisco, Ca 94102 United States',
            address: '150 Anza Blvd',
            venueName: 'Embassy Suites - Burlingame',
            beginTime: '11:30 AM',
            endTime: '2:00 PM',
            company: 'Google',
            price: '1$',
            contactPhone: '123456789',
            contactEmail: 'email@email.com',
            mapLatitude: 51.501275,
            mapLongitude: -0.125064
          },
          {
            name: 'ev3',
            img: '/src/assets/logo.png',
            imgAlt: 'logo3',
            description: 'desc3',
            date: '20.04.2018',
            city: 'San Francisco, Ca 94102 United States',
            address: '150 Anza Blvd',
            venueName: 'Embassy Suites - Burlingame',
            beginTime: '11:30 AM',
            endTime: '2:00 PM',
            company: 'Google',
            price: '1$',
            contactPhone: '123456789',
            contactEmail: 'email@email.com',
            mapLatitude: 51.501275,
            mapLongitude: -0.125064
          }
        ]*/
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
* {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  color: #333;
}
a {
  text-decoration: none;
  color: #463ac9;
}
a:hover {
  text-decoration: underline;
}
button {
    background-color: #463ac9;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
    padding: 10px 20px;
    border: 2px solid #463ac9;
    font-size: 16px;
    transition: all 2s;
    display: inline-flex;
    align-items: center;
    transition: all .3s;
    cursor: pointer;
    margin-right: 10px;
    outline: none;
}
button:last-child {
  margin-right: 0;
}
button:hover {
  background-color: #2c21a1;
}

.event-buttons button {
  border: 2px solid #fff;
  color: white;
  background-color: transparent;
}
.event-buttons button:hover {
  background-color: white;
  color: #463ac9;
}
.cancel-button {
  background-color: white;
  border: 2px solid #463ac9;
  color: #463ac9;
}
.cancel-button:hover{
  background-color: #f1f0f7;
  border: 2px solid #463ac9;
  color: #463ac9;
}
.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.container {
  min-height: calc(100vh - 202px);
}
.signup, .login {
  width: 400px;
  margin: 0 auto;
  padding: 60px;
  text-align: center;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #463ac9;
}
</style>
