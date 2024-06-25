<template>
  <div id="app" :class="{'mobile-view': isMobile}">
    <NavBar />
  
    <div class="py-5">
      <router-view />

      <FooterView/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterView from './components/footerView.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterView
},
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    // Check if the user is on a mobile device
    this.isMobile = window.innerWidth <= 600;

    // Listen for window resize events
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    // Clean up the event listener
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      // Update the isMobile flag based on the window width
      this.isMobile = window.innerWidth <= 600;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #e9c0a5;
}

.mobile-view {
  /* Styles for mobile view here */
  background-color: #ffffff;
  color: #000000;
}
</style>
