<template lang="pug" functional>
  section.gameInfoWrapper
    .row
      .col
        .label Score:
        .value {{ props.score.reached }}
      .col
        .label {{ (props.isRunning) ? 'Pause:' : 'Play:' }}
        .value SPACE
      .col
        .label Speed:
        .value {{ (props.maxSpeed) ? 'MAX SPEED' : props.speed }}
      .col
        .label EXIT:
        .value <v-btn text class="display-2 white text-xs-center my-5" to="/snake-game-welcome"> X </v-btn>
        
</template>

<script>
export default {
  props: {
    isRunning: {
      required: true,
      type: Boolean
    },
    maxSpeed: {
      required: true,
      type: Boolean
    },
    speed: {
      required: true,
      type: Number
    },
    score: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
@import '@/styles/sizes.scss';

@keyframes scalePlayHint {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

.gameInfoWrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: $scoreBoardHeight;
  background: #1a237e;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  border: 3px solid $mainColor;

  .row {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .col {
    height: 100%;
    padding: 10px 30px;
    display: flex;
    flex-wrap: nowrap;
    // align-items: cente`r;

    &:nth-of-type(2) {
      animation-name: scalePlayHint;
      animation-duration: 1.5s;
      animation-timing-function: ease-in;
    }
  }

  .label,
  .value {
    display: inline-block;
    color: white;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3rem;
  }

  .label {
    margin-right: 10px;
    color: $mainColor;
    text-transform: uppercase;
    text-shadow: -1px 1px 2px rgba(black, 0.65);
  }
}
</style>
