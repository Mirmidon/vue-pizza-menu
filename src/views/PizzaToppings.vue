<template>
  <v-container class="px-0" fluid>
    <h1>Pizza Toppings</h1>
    <v-checkbox value="Mushrooms" label="Mushrooms" v-model="selected"></v-checkbox>
    <v-checkbox value="Olives" label="Olives" v-model="selected"></v-checkbox>
    <v-checkbox value="Tomato" label="Tomato" v-model="selected"></v-checkbox>
    <v-checkbox value="Tona" label="Tona" v-model="selected"></v-checkbox>
    <v-checkbox value="Pineapple" label="Pineapple" v-model="selected"></v-checkbox>
    <v-checkbox value="Seafood" label="Seafood" v-model="selected"></v-checkbox>
    <v-checkbox value="Pepperoni" label="Pepperoni" v-model="selected"></v-checkbox>
    <v-checkbox value="Bacon" label="Bacon" v-model="selected"></v-checkbox>
    <v-checkbox value="Onion" label="Onion" v-model="selected"></v-checkbox>
    <v-checkbox value="Mozarella" label="Mozarella" v-model="selected"></v-checkbox>
    <v-btn elevation="2" v-on:click="prevPage">Previous</v-btn>
    <v-btn elevation="2" v-on:click="nextPage">Next</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'PizzaToppings',

    data: () => ({
      selected: []
    }),

    methods: {
      prevPage() {
        // TODO: get prev values
        this.$router.push('/pizza-size');
      },
      nextPage() {
        this.$store.dispatch('setPizzaToppings', this.selected);
        this.$router.push('/customer-details');
      }
    }
  }
</script>