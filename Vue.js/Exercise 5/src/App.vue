<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title class="headline"> <span>Car list - Hans</span>
      </v-app-bar-title>
    </v-app-bar>
    <v-content>
      <CarList/>
    </v-content>
  </v-app>
</template>

<script>
  import CarList from './components/CarList.vue'

  export default {
    name: 'App',
    components: {
      CarList
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
