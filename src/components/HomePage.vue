<template>
  <v-container fluid fill-height style="max-height: 100vh" class="home-page">
    <!-- v-layout puts all text on top of image -->
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">
        EXPLORE SPACE
      </div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-12">
        FROM YOUR HOME
      </div>
      <!-- mb-5 = apply a margin-bottom of 5. This spaces between header and subHeader text. -->
      <!-- <br /> <br /> -->
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Explore space and our galaxy like never before
      </div>
      <v-btn fab class="mt-5 amber-darken-3">
        <v-icon large color="black">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.home-page {
  background: url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  width: 100%;
  height: 60%;
}
</style>
