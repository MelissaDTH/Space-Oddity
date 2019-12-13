<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="indigo darken-2">
        <strong class="subheading">Connect with me</strong>

        <v-spacer/>

      <v-btn text class="hidden-sm-and-down" to="/snake-game-welcome">
        <v-icon left>code</v-icon>Github
      </v-btn>
            <v-btn text class="hidden-sm-and-down" to="/snake-game-welcome">
        <v-icon left>work</v-icon>LinkedIn
      </v-btn>
      </v-card-title>

      <v-card-text class="py-1 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Melissa 't Hart</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<style scoped>
.subheading {
    font-weight: bold;
    font-size: 30px;  display: block;
  margin: auto;
}
</style>
