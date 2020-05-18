<template>
  <div>
    <h1>Todo list by Hans </h1>
    <input type="text" placeholder="Add todo here" v-model="description" />
    <input type="text" placeholder="Date" v-model="date" />
  <button v-on:click="add">Add</button><br/>

  <table>
    <tbody>
    <tr v-for="(todo, index) in todos" v-bind:key="index"><td><li>{{todo.description}}</li>
      <li>{{todo.date}}</li>
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
      todos: [{
        description: 'Example todo task',
        date: '01-01-1970',
      }],
      description: '',
      date: ''
    }
  },
  methods: {
    add: function()
    {
      this.todos.push( {
        description: this.description,
        date: this.date }
        );
      this.description = '';
      this.date = ''
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
