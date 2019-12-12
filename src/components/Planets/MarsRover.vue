<template>
  <!-- https://images.unsplash.com/photo-1532954751162-d1b6d1f3b1a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80 -->
  <v-container grid-list-lg>
      <v-flex>
        <div class="headline mt-3">100 Billion alien planets fill our Milky Way Galaxy</div>
        <p class="subheading mt-3">
          NASA send two rovers, Spirit and Opportunity, to explore the planet Mars. It began in 2003 with the launch of the two rovers: MER-A Spirit and MER-B Opportunity—to explore the Martian surface and geology. They both landed on Mars at separate locations in January 2004. Both rovers far outlived their planned missions of 90 Martian solar days: MER-A Spirit was active until March 22, 2010, while MER-B Opportunity was active until June 10, 2018 and holds the record for the longest distance driven by any off-Earth wheeled vehicle.
        </p>
      </v-flex>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img :src="marsRover[1]"></v-img>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
        <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img :src="marsRover[7]"></v-img>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
        <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img :src="marsRover[16]"></v-img>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>
export default {
  name: 'marsRover',
  computed: {
    marsRover() {
      // console.log('state?', this.$store.state.marsRover);
      return this.$store.state.marsRover;
    }
  }
};
</script>

<style scoped>
.div-explanation {
  font-size: 16px;
}
</style>
