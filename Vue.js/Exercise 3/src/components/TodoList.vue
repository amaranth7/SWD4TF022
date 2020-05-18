<template>
  <div>
    <h1>Todo list by Hans </h1>
  <input type="text" placeholder="Add todo here" v-model="description" />
  <button v-on:click="add">Add</button><br/>

  <table>
    <tbody>
    <tr v-for="(todo, index) in todos" v-bind:key="index"><td>{{todo}}
      </td></tr>
    </tbody>
  </table>
  </div>
</template>


<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      description: ''
      }
    },
  methods: {
    add: function()
    {
      this.todos.push(this.description);
      this.description = ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
td:before {
  content:"• ";
}

table {
    margin-left:auto;
    margin-right:auto;
}

</style>
