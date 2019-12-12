<template>
  <v-container fluid fill-height style="max-height: 100vh" class="home-page">
    <!-- v-layout puts all text on top of image -->
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center mb-5">
        Mars Exploration Rovers
      </div>
    </v-layout>
    <v-flex>
      <br />
      <v-layout column>
        <v-flex>
          <div class="display-1 headline mt-5">Mars Rover Photos</div>
          <p class="subheading mt-3">
            NASA send two rovers, Spirit and Opportunity, to explore the planet
            Mars. It began in 2003 with the launch of the two rovers: MER-A
            Spirit and MER-B Opportunity—to explore the Martian surface and
            geology. They both landed on Mars at separate locations in January
            2004. Both rovers far outlived their planned missions of 90 Martian
            solar days: MER-A Spirit was active until March 22, 2010, while
            MER-B Opportunity was active until June 10, 2018 and holds the
            record for the longest distance driven by any off-Earth wheeled
            vehicle.
          </p>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-container fluid>
      <v-row>
        <v-col cols="6" sm="4">
          <v-img :src="marsRover[1]"></v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img :src="marsRover[7]"> </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img :src="marsRover[16]"> </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'marsRover',
  computed: {
    marsRover() {
      return this.$store.state.marsRover;
    }
  }
};
</script>

<style scoped>
.home-page {
  background: url('https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1667&q=80');
  background-size: cover;
  width: 100%;
  height: 60%;
}
</style>
