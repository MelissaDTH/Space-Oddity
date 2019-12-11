<template>
  <span>
    <PlanetsPage />
    <PlanetsInfo />
    <AstronomyPhoto />
  </span>
</template>

<script>
// @ is an alias to /src
import PlanetsPage from '@/components/Planets/PlanetsPage.vue';
import PlanetsInfo from '@/components/Planets/PlanetsInfo.vue';
import AstronomyPhoto from '@/components/Planets/AstronomyPhoto.vue';

export default {
  name: 'Planets',
  components: {
    PlanetsPage,
    PlanetsInfo,
    AstronomyPhoto
  }
};
</script>
