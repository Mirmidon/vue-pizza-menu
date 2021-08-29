<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>

      <v-btn>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/pizza-size">Pizza Size</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/pizza-toppings">Pizza Toppings</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/customer-details">Customer Details</router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
