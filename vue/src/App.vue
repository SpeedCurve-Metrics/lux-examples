<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted: function () {
    this.$nextTick(function () {
    // LUX START
    // Set the page label so that the LUX data can be easily grouped by page.
    window.LUX.label = 'home';

    // Manually send the beacon once the component is mounted. If you have many
    // top-level components, you might want to consider abstracting this into a
    // higher-order component like TrackedComponent in the README.
    window.LUX.send();
    // LUX END
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
