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
    name: 'CustomerDetails',

    data: () => ({
      name: "",
      address: "",
      phone: "",
    }),

    methods: {
      prevPage() {
        // TODO: get prev values
        this.$router.push('/pizza-toppings');
      },
      goToResults() {
        const payload = {
          name: this.name,
          address: this.address,
          phone: this.phone,
        }

        this.$store.dispatch('setCustomerDetails', payload);
        this.$router.push('/results');
      }
    }
  }
</script>