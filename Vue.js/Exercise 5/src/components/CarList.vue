<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="cars"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'CarList',
        data() {
            return {
                cars: [],
                headers: [
                    { text: 'Brand', value: 'brand' },
                    { text: 'Model', value: 'model' },
                    { text: 'Color', value: 'color' },
                    { text: 'Year', value: 'year' },
                    { text: 'Price', value: 'price' },
                    { text: 'Fuel', value: 'fuel' },
                ]
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