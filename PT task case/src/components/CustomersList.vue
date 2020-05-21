<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="customers"
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
        name: 'CustomersList',
        data() {
            return {
                customers: [],
                headers: [
                    {text: 'First name', value: 'firstname'},
                    {text: 'Surname', value: 'lastname'},
                    {text: 'Address', value: 'streetaddress'},
                    {text: 'ZIP code', value: 'postcode'},
                    {text: 'City', value: 'city'},
                    {text: 'E-mail', value: 'email'},
                    {text: 'Phone #', value: 'phone'},
                    {text: 'Actions', value: 'actions', sortable: false},
                ],
            }
        },

        /*
                methods: {


                    deleteItem: function(item)
                    {
                        axios
                            .delete(item._links.self.href)
                            .get('https://customerrest.herokuapp.com/api ')
                            .then(response => (this.cars = response.data._embedded.cars))
                    }},

                     */

        mounted() {
            axios
                .get('https://customerrest.herokuapp.com/api/customers')
                .then(response => (
                    //console.log(response.data.content)
                    //this.customers = response.data.content.customers
                      this.customers = response.data.content
                ))

            //.then(response => (this.cars = response.data._embedded.cars))
        }
        //this.customers = response.data.map(customers)
    }


</script>



<style>
    table {
        margin-left:auto;
        margin-right:auto;
    }
</style>