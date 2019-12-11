<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4>{{astronomyPhoto.title}}
        <v-card>
          <v-responsive>
            <v-img :src="astronomyPhoto.hdurl"></v-img>
          </v-responsive>

          <v-card-text>
            <div class="title">{{ astronomyPhoto.date }}</div>

            <div class="subheading">{{ astronomyPhoto.title }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
