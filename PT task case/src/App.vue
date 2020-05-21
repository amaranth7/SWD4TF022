<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar class="headline"> <span>Customer list</span>
      </v-toolbar>
    </v-app-bar>
    <v-content>
      <CustomersList/>
    </v-content>
  </v-app>
</template>

<script>
  import CustomersList from './components/CustomersList.vue'

  export default {
    name: 'App',
    components: {
      CustomersList
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
