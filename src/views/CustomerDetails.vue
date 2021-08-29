<template>
  <v-container id="input-usage" fluid>
    <h1>Customer details</h1>
    <v-row><v-col cols="12" sm="6" md="3">
        <v-text-field label="Name" v-model="name"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Address" v-model="address"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Phone" v-model="phone"></v-text-field>
      </v-col>
    </v-row>
    <v-btn elevation="2" v-on:click="prevPage">Previous</v-btn>
    <v-btn elevation="2" v-on:click="goToResults">Finish</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'PizzaToppings',

    data: () => ({
      // selected: []
      name: "",
      address: "",
      phone: "",
    }),

    methods: {
      prevPage() {
        // TODO: add vuex dispatcher to store data
        this.$router.push('/pizza-toppings');
      },
      goToResults() {
        // console.log('to results ', this.name, this.address, this.phone);
        // TODO: add vuex dispatcher to store data
        this.$router.push('/results');
      }
    }
  }
</script>