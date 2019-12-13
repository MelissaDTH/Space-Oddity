<template>
  <v-container fluid fill-height style="max-height: 100vh" class="home-page">
    <!-- v-layout puts all text on top of image -->
    <v-layout justify-center align-center column pa-1>
      <div class="display-4 font-weight-black white--text text-xs-center">
        PLANETS
      </div>
      <br />
      <br />
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Explore every planet and discover all there is to know
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Planets'
};
</script>

<style scoped>
.home-page {
  background: url('https://images.unsplash.com/photo-1478502161016-a691575b097b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  width: 100%;
  height: 40%;
}
</style>
