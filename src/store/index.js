import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    astronomyPhoto: {},
    apiUrlAstro:
      'https://api.nasa.gov/planetary/apod?api_key=Ctnhde17a5uJ8kaGtmydX7Ad61xi7DXC0yMunoDe',
    marsRover: {},
    apiUrlRover:
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Ctnhde17a5uJ8kaGtmydX7Ad61xi7DXC0yMunoDe'
  },
  mutations: {
    setAstronomyPhoto(state, payload) {
      state.astronomyPhoto = payload;
    },
    setMarsRover(state, payload) {
      state.marsRover = payload;
    }
  },
  actions: {
    async getAstronomyPhoto({ state, commit }, photo) {
      try {
        let response = await axios.get(`${state.apiUrlAstro}`, {
          params: {
            concept_tags: photo
          }
        });
        commit('setAstronomyPhoto', response.data);
      } catch (error) {
        commit('setAstronomyPhoto', {});
      }
    },
    async getMarsRover({ state, commit }, photos) {
      try {
        let response = await axios.get(`${state.apiUrlRover}`, {
          params: {
            photos: photos
          }
        });
        commit(
          'setMarsRover',
          response.data.photos.map(response => response.img_src)
        );
      } catch (error) {
        commit('setMarsRover', {});
      }
    }
  },
  modules: {}
});
