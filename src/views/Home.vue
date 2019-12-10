<template>
    <span>
        <home-page />
        <home-details />
    </span>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage';
import HomeDetails from '@/components/HomeDetails'

export default {
    name: 'home',
    components: {
        HomePage,
        HomeDetails
    }
};
</script>
