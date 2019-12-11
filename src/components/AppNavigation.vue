<template>
  <span>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="grey"
      dark
      disable-resize-watcher
    >
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
      <router-link to="/">
        <v-toolbar-title class='title'>{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down" to="/planets">Planets</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/world-map">World map</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/signup">Sign up</v-btn>
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
      items: [
        { title: 'Planets' },
        { title: 'World map' },
        { title: 'Sign up' }
      ]
    };
  }
};
</script>

<style scoped>
a, a:visited {
  color: white;
  text-decoration: none;
}

.title {
  text-transform: uppercase;
}
</style>