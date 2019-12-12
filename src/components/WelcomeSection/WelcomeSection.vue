<template lang="pug">
  section.welcome
    welcome-logo

    h1.welcomeTitle Space Snake

    start-game-button(@click="redirectToGame")
</template>

<script>
/* child components */
import WelcomeLogo from './WelcomeLogo.vue';
import StartGameButton from './StartGameButton.vue';

export default {
  name: 'WelcomeSection',
  components: {
    WelcomeLogo,
    StartGameButton
  },

  methods: {
    redirectToGame() {
      this.$router.push({ name: 'game' });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.welcome {
  padding: 80px 40px;
  background: url('https://media.wired.com/photos/5d9276f5cdc4580008379a94/master/pass/Science_deathstarfeature_MCDROON_EC053.jpg');
  background-size: cover;

  .welcomeTitle {
    color: white;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 650px;
  }
}
</style>
