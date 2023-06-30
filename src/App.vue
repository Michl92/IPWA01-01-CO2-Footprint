<template>
    <GlobalNavigation />
      <router-view /> 
    <footer class="d-flex justify-center">
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
