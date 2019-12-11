import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    astronomyPhoto: {},
    apiUrl:
      'https://api.nasa.gov/planetary/apod?api_key=Ctnhde17a5uJ8kaGtmydX7Ad61xi7DXC0yMunoDe'
  },
  mutations: {
    setAstronomyPhoto(state, payload) {
      state.astronomyPhoto = payload;
    }
  },
  actions: {
    async getAstronomyPhoto({ state, commit }, photo) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            concept_tags: photo
          }
        });
        commit('setAstronomyPhoto', response.data);
      } catch (error) {
        commit('setAstronomyPhoto', {});
      }
    }
  },
  modules: {}
});
