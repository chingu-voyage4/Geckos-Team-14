<template>
  <div>
    <app-header @exit="logOut"
                @searchChange="searchChange"
                :login="login"
                :showSearch="showSearch"></app-header>
    <transition name = "fade"
                mode = "out-in" 
                appear>
        <router-view  :events="events"
                      :login="login"
                      :search="search"
                      @login="authorisation"
                      @register="authorisation" 
                      @render="renderEvents"
                      @showSearch="searchVisibility"
                      @emailChanged="emailChange"
                      @exit="logOut"></router-view>
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
        login: '',
        search: '',
        showSearch: ''
      }
  },
  methods: {
    authorisation(data) {
      this.login = data
    },
    logOut(){
      this.login = ''
    },
    renderEvents(){
      axios.get(`https://codemeets.herokuapp.com/events`)
      .then(response => {
        this.events = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    searchChange(data){
      this.search = data;
    },
    searchVisibility(data){
      this.showSearch = data;
    },
    emailChange(data){
      this.login.email = data;
    }
  },
  mounted(){
    this.renderEvents();
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
button:disabled {
  opacity: .7;
  cursor: default;
}
button:disabled:hover{
  background-color: #463ac9;
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
  min-height: calc(100vh - 232px);
}
.signup, .login, .reset-profile {
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
.fill {
  text-decoration: underline;
}
</style>
