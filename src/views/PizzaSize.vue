<template>
  <v-container class="px-0" fluid>
    <h1>Pizza Size</h1>
    <v-radio-group v-model="selected">
      <v-radio value="Small" label="Small"/>
      <v-radio value="Medium" label="Medium"/>
      <v-radio value="Large" label="Large"/>
      <v-radio value="ExtraLarge" label="Extra Large"/>
    </v-radio-group>
    <v-btn elevation="2" v-on:click="nextPage">Next</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      selected: ""
    }),

    methods: {
      nextPage() {
        // console.log('selected ', this.selected);
        // TODO: add vuex dispatcher to store data
        this.$store.dispatch('setPizzaSize', this.selected);
        this.$router.push('/pizza-toppings');
      }
    }
  }
</script>
