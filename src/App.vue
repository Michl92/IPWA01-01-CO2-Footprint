<template>
    <GlobalNavigation />
      <router-view /> 
    <footer class="d-flex flex-row mb-6 justify-center order-2">
      <router-link class="Impressum" to="/impressum">Impressum</router-link>
      <router-link class="Privacy" to="/privacy">Rechtliche Hinweise</router-link>
    </footer>
</template>

<script setup>
  import GlobalNavigation from './components/GlobalNavigation.vue';
</script>

<style>
.v-application__wrap {
  min-height: 15vh;
}

footer > a{
  border: 5px;
  margin: 5px;
  padding: 5px;
}
</style>
