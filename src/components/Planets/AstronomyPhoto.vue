<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex
        xs12
        class="text-xs-center display-1 font-weight-black my-5"
      ></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md13>
        <v-card>
          <v-responsive>
            <v-img :src="astronomyPhoto.hdurl"></v-img>
          </v-responsive>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{ astronomyPhoto.title }}</h2>
              <h5 class="div-date">{{ astronomyPhoto.date }}</h5>
              <br />
              <div class="div-explanation">
                <i>{{ astronomyPhoto.explanation }}</i>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="text-center"></div>
  </v-container>
</template>

<script>
export default {
  name: 'AstronomyPhoto',
  computed: {
    astronomyPhoto() {
      return this.$store.state.astronomyPhoto;
    }
  }
};
</script>

<style scoped>
.div-explanation {
  font-size: 16px;
}
</style>
