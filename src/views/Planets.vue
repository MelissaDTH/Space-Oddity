<template>
  <span>
    <PlanetsPage />
    <PlanetsInfo />
  </span>
</template>

<script>
// @ is an alias to /src
import PlanetsPage from '@/components/Planets/PlanetsPage.vue'
import PlanetsInfo from '@/components/Planets/PlanetsInfo.vue'


export default {
  name: 'Planets',
  components: {
    PlanetsPage,
    PlanetsInfo
  }
};
</script>
