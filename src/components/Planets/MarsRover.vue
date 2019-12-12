<template>
  <v-container fluid fill-height style="max-height: 100vh" class="home-page">
    <!-- v-layout puts all text on top of image -->
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center mb-5">
        Mars Exploration Rovers
      </div>
    </v-layout>
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
  </v-container>
</template>

<script>
export default {
  name: 'HomePage'
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

<!--
<template>
  <v-container grid-list-lg >
    <v-flex>
      <div class="headline mt-3">
        Mars Exploration Rovers
      </div>
      <p class="subheading mt-3">
        NASA send two rovers, Spirit and Opportunity, to explore the planet
        Mars. It began in 2003 with the launch of the two rovers: MER-A Spirit
        and MER-B Opportunity—to explore the Martian surface and geology. They
        both landed on Mars at separate locations in January 2004. Both rovers
        far outlived their planned missions of 90 Martian solar days: MER-A
        Spirit was active until March 22, 2010, while MER-B Opportunity was
        active until June 10, 2018 and holds the record for the longest distance
        driven by any off-Earth wheeled vehicle.
      </p>
    </v-flex>
 <v-container fluid>
    <v-row>
      <v-col cols="6" sm="4">
        <v-img
          :src="marsRover[1]"
        ></v-img>
      </v-col>

      <v-col cols="6" sm="4">
        <v-img :src="marsRover[7]">
        </v-img>
      </v-col>

      <v-col cols="6" sm="4">
        <v-img :src="marsRover[16]">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <div class="marsRover">
    <h1>Test</h1>
  </div>
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
.marsRover {
  background: url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  width: 100%;
  height: 60%;
}
</style>
-->
