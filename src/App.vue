<template>
  <div>
    <app-header></app-header>
    <transition name = "fade"
                mode = "out-in" 
                appear>
        <router-view :events="events"></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  data() {
      return {
        events: [{
            name: 'ev1',
            img: '/src/assets/logo.png',
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
            mapLatitude: 51.501275,
            mapLongitude: -0.125064
          }
        ]
      }
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.container {
  min-height: 400px;
}
.signup, .login {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}
.signup input,
.login input {
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}
</style>
