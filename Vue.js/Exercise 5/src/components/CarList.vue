<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="cars"
                :items-per-page="6"
                class="elevation-1">
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
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
                    { text: 'Actions', value: 'actions', sortable: false  },
                ]
            }
        },
        methods: {
            deleteItem: function(item)
            {
                axios
                    .delete(item._links.self.href)
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