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
        <v-card @click="showAstronomy('photo')" to="/planets/photo-of-the-day">
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
              <v-btn
                block
                color="blue"
                @click="showAstronomy('photo')"
                to="/planets/photo-of-the-day"
                >Go here</v-btn
              >
            </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-spacer />

      <v-flex xs12 sm12 md6>
        <v-card @click="showMarsRover('photo')" to="/planets/mars-rover">
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

    <v-layout column>
      <v-flex class="display-2 text-xs-center my-5"
        >What do you wanna know?</v-flex
      >
      <v-flex>
        <div class="headline mt-3">Our Solar System</div>
        <p class="subheading mt-3">
          The planetary system is located in an outer spiral arm of the Milky
          Way galaxy. Our solar system consists of our star, the Sun, and
          everything bound to it by gravity — the planets Mercury, Venus, Earth,
          Mars, Jupiter, Saturn, Uranus and Neptune, dwarf planets such as
          Pluto, dozens of moons and millions of asteroids, comets and
          meteoroids. Beyond our own solar system, we have discovered thousands
          of planetary systems orbiting other stars in the Milky Way.
        </p>
        <p class="subheading mt-3">
          There are more planets than stars in our galaxy. The current count
          orbiting our star: eight. The inner, rocky planets are Mercury, Venus,
          Earth and Mars. The outer planets are gas giants Jupiter and Saturn
          and ice giants Uranus and Neptune. Beyond Neptune, a newer class of
          smaller worlds called dwarf planets reign, including perennial
          favorite Pluto.
        </p>
      </v-flex>
      <v-flex>
        <div class="headline mt-3">
          100 Billion alien planets fill our Milky Way Galaxy
        </div>
        <p class="subheading mt-3">
          Our Milky Way galaxy is home to at least 100 billion alien planets,
          and possibly many more, a new study suggests. "It's a staggering
          number, if you think about it," lead author Jonathan Swift, of Caltech
          in Pasadena, said in a statement. "Basically there's one of these
          planets per star." Swift and his colleagues arrived at their estimate
          after studying a five-planet system called Kepler-32, which lies about
          915 light-years from Earth. The five worlds were detected by NASA's
          Kepler Space Telescope, which flags the tiny brightness dips caused
          when exoplanets cross their star's face from the instrument's
          perspective.
        </p>
      </v-flex>
    </v-layout>

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
              <v-btn block color="blue">Go here</v-btn>
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
</template>

<script>
export default {
  name: 'Planets',
  methods: {
    showAstronomy(photo) {
      this.$store.dispatch('getAstronomyPhoto', photo);
    },
    showMarsRover(photo) {
      this.$store.dispatch('getMarsRover', photo);
    }
  }
};
</script>

<style scoped>
.div-text {
  font-size: 16px;
}

.v-btn {
  align-content: center;
}
</style>
