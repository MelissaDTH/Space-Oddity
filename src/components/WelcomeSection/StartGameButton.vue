<template lang="pug">
  <v-btn text large class="startGameBtn" @click="onClick">
    <v-icon left>play_circle_filled</v-icon>START THE GAME
  </v-btn>
  //- button.startGameBtn(@click="onClick")
  //-   span.btnIcon
  //-     fa-icon(icon="play-circle")
  //-   span.btnText {{ buttonTextComputed }}
</template>

<script>
export default {
  props: {
    repeat: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    buttonTextComputed() {
      return this.repeat ? 'TRY AGAIN' : 'START GAME';
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

$fontSize: 1.8rem;

.startGameBtn {
  padding: 20px 20px;
  background: $mainColor;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 60px;
  transition: background-color 0.5s ease;
  display: block;
  margin: auto;

  &:hover {
    background-color: lightblue;
    border: 6px solid $mainColor;
    transition: background-color 0.2s ease;
  }

  .btnIcon {
    font-size: $fontSize;
    margin-right: 10px;
  }

  .btnText {
    font-size: $fontSize;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

    font-family: Verdana;
    font-weight: bold;
  }
}
</style>
