<template>
    <GlobalNavigation />
    <router-view />  
</template>

<script setup>
  import GlobalNavigation from './components/GlobalNavigation.vue';
</script>

<style>
.v-application__wrap {
  min-height: 15vh;
}
</style>
