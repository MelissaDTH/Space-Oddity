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
            <v-list-item>{{ item.title }}</v-list-item>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo darken-2" dark>
      <v-app-bar-nav-icon
        fixed
        dense
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title class="title">{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down" to="/planets">
        <v-icon left>language</v-icon>Planets
      </v-btn>
      <v-btn text class="hidden-sm-and-down" to="/snake-game-welcome">
        <v-icon left>videogame_asset</v-icon>Space Game
      </v-btn>
      <v-btn text class="hidden-sm-and-down" to="/signup">
        <v-icon left>account_circle</v-icon>Sign up
      </v-btn>
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
        { title: 'Space Game' },
        { title: 'Sign up' }
      ]
    };
  }
};
</script>

<style scoped>
a,
a:visited {
  color: white;
  text-decoration: none;
}

.title {
  text-transform: uppercase;
}
</style>
