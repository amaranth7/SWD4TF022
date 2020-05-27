<template>
  <div id="app">
    <div id="nav">
      <v-toolbar class="headline"> <span>Customer management tool</span>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/customerslist">Customer list</v-tab>
          <v-tab to="/trainingslist">Trainings list</v-tab>
          <v-tab to="/calendar">Calendar</v-tab>
        </v-tabs>
      </v-toolbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
