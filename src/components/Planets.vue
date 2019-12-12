<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Planets</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <router-link to="/planets">
            <v-img
              src="https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">EARTH</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </router-link>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Earth</h3>
              <div class="div-text">
                Earth is the third planet from the Sun and the only astronomical
                object known to harbor life. The Earth was formed over 4.5
                billion years ago. Earth's gravity interacts with other objects
                in space, especially the Sun and the Moon, which is Earth's only
                natural satellite.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <router-link to="/planets">
            <v-img src="https://bit.ly/35c0Yzz" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">THE MOON</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </router-link>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">The Moon</h3>
              <div class="div-text">
                The moon may not be defined as a planet, it definitely acts like
                one. Like the Earth, our moon has a crust, a mantle and a core.
                These interior layers are present on most planets. The Moon is
                probably formed about 4.51 billion years ago, not long after
                Earth.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <router-link to="/planets">
            <v-img src="https://bit.ly/2REf6xF" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">MARS</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </router-link>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Mars</h3>
              <div class="div-text">
                Mars is the fourth planet from the Sun and the second-smallest
                planet in the Solar System. The days and seasons are comparable
                to those of Earth, because the rotational period as well as the
                tilt of the rotational axis relative to the ecliptic plane are
                very similar.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Planets'
};
</script>

<style scoped>
.div-text {
  font-size: 16px;
}

a {
  text-decoration: none;
}
</style>
