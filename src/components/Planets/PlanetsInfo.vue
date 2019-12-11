<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex
        xs12
        class="text-xs-center display-1 font-weight-black my-5"
      ></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-card>
          <v-img
            src="https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg"
            height="250px"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">ASTRONOMY</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Astronomy photo of the day</h3>
              <div class="div-text">
                Discover the cosmos! Each day a different image or photograph of
                our fascinating universe is featured, along with a brief
                explanation written by a professional astronomer.
              </div>
            </div>
            <v-card-actions>
              <v-btn block color="blue" @click="showAstronomy('photo')"
                >Go here</v-btn
              >
            </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-spacer />

      <v-flex xs12 sm12 md6>
        <v-card>
          <v-img src="https://bit.ly/2REf6xF" height="250px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">MARS</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Mars Rover photos</h3>
              <div class="div-text">
                There are different rovers on Mars gathering data. The collected
                image data gathered by NASA's Curiosity, Opportunity, and Spirit
                rovers on Mars can be found here!
              </div>
            </div>
            <v-card-actions>
              <v-btn block color="blue">Go here</v-btn>
            </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <!-- <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="https://bit.ly/35c0Yzz" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">THE MOON</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">The Moon</h3>
              <div class="div-text">
                The moon may not be defined as a planet, it <br />
                definitely acts like one. Like the Earth, our <br />
                moon has a crust, a mantle and a core. These <br />
                interior layers are present on most planets. <br />
                The Moon is probably formed about 4.51 billion years ago, not
                long after Earth.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
  -->
</template>

<script>
export default {
  name: 'Planets',
  methods: {
    showAstronomy(photo) {
      this.$store.dispatch('getAstronomyPhoto', photo);
    }
  }
};
</script>

<style scoped>
.div-text {
  font-size: 16px;
}
</style>
