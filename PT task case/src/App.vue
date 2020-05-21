<template>
  <v-app>
      <v-toolbar class="headline"> <span>Customer management tool</span>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/customerlist">Customer list</v-tab>
            <v-tab to="/traininglist">Training list</v-tab>
            <v-tab to="/calendar">Calendar</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

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
      CustomersList,
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
