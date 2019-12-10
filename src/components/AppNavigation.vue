<template>
  <span>
    <v-navigation-drawer v-model="drawer" absolute temporary class="brown lighten-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item>{{item.title}}</v-list-item>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-4" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down">PLANETS</v-btn>
      <v-btn text class="hidden-sm-and-down">World map</v-btn>
      <v-btn text class="hidden-sm-and-down">Sign up</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Space Oddity',
      drawer: false,
      items: [{ title: 'Planets' }, { title: 'World map' }, { title: 'Sign up' }]
    };
  }
};
</script>

<style scoped>
</style>