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
            img: 'img1',
            description: 'desc1'
          },
          {
            name: 'ev2',
            img: 'img2',
            description: 'desc2'
          },
          {
            name: 'ev3',
            img: 'img3',
            description: 'desc3'
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

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
