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
        <div class="headline mt-3">Terrestrial Planets</div>
        <p class="subheading mt-3">
          The terrestrial planets are the four innermost planets in the solar
          system, Mercury, Venus, Earth and Mars. They are called terrestrial
          because they have a compact, rocky surface like the Earth's. The
          planets, Venus, Earth, and Mars have significant atmospheres while
          Mercury has almost none. The following diagram shows the approximate
          distance of the terrestrial planets to the Sun.
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
    }
  }
};
</script>

<style scoped>
.div-text {
  font-size: 16px;
}
</style>
