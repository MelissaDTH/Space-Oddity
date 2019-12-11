<template>
  <span>
    <home-page />
    <home-details />
    <planets />
  </span>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage';
import HomeDetails from '../components/HomeDetails';
import Planets from '../components/Planets';

export default {
  name: 'home',
  components: {
    HomePage,
    HomeDetails,
    Planets
  }
};
</script>
