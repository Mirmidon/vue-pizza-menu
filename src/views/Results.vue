<template>
  <v-container id="input-usage" fluid>
    <h1>Results page</h1>
    <v-btn elevation="2" v-on:click="nextPage">Check out</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'Results',

    methods: {
      // prevPage() {
        // TODO: add vuex dispatcher to store data
        // this.$router.push('/pizza-toppings');
      // },
      nextPage() {
        // TODO: add vuex dispatcher to store data
        // this.$router.push('/checkout-redirect');
      }
    }
  }
</script>