<template>
  <div id="app">
    <CarList/>
  </div>
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
