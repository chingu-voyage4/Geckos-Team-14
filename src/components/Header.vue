<template>
  <div class="navbar">
      <router-link to="/" tag = "a" class="logo">Codemeets</router-link>
      <input type="text" class="search" 
      v-model = "search" 
      v-show = "showSearch"
      @input="searchChanged" 
      placeholder="Search event...">
      <div class="signup-login">
        <span v-if="login!==''">
          <span>{{login.email}}</span>
          <router-link to="/profile" tag = "button" class="profile-button">Profile</router-link>
          <button class="exit-button" @click="exit">Log out</button>
        </span>
        <span v-else>
        <router-link to="/register" tag = "button">Sign up</router-link>
        <router-link to="/login" tag = "button">Login</router-link>
        </span>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

    export default {
      props: ['login','showSearch'],
      data() {
        return {
          search: ''
        }
      },
      methods: {
        searchChanged(){
          this.$emit('searchChange', this.search)
        },
        exit() {
          sessionStorage.clear();
          this.$emit('exit');
          this.$router.push('/');
        }
      }
    }
</script>

<style scoped>
  .navbar {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .signup-login {
    margin: 0 60px;
  }
  .logo {
    color: #463ac9;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    margin: 0 60px;
  }
  .profile-button {
    margin-left: 10px;
  }
  .search {
    width: 300px;
    margin-bottom: 0;
    outline: none;
    border-width: 2px;
    border-radius: 3px;
  }
  .search:hover {
    box-shadow: 0 0 8px 0px rgba(70, 58, 201,.5)
  }
  .search:focus {
    box-shadow: 0 0 8px 2px rgba(70, 58, 201,.5)
  }
</style>
