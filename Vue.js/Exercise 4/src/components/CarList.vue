<template>
    <div>
        <h1>Car list - Hans</h1>
        <table>
            <tbody>
            <tr v-for="(car, index) in cars" v-bind:key="index">
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td>{{car.color}}</td>
                <td>{{car.year}}</td>
                <td>{{car.price}}€</td>
                <td>{{car.fuel}}</td>
                <td><button v-on:click="del(car._links.self.href)">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'CarList',
        data() {
            return {
                cars: [],
            }
        },
        methods: {
            del: function(url)
            {
                axios
                    .delete(url)
                    .get('https://carstockrest.herokuapp.com/cars')
                    .then(response => (this.cars = response.data._embedded.cars))
            }},
        mounted() {
            axios
                .get('https://carstockrest.herokuapp.com/cars')
                .then(response => (this.cars = response.data._embedded.cars))
        }
    }
</script>



<style>
    table {
        margin-left:auto;
        margin-right:auto;
    }
</style>