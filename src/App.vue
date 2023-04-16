<template>
    <GlobalNavigation />
    <main>
      <div class="d-flex flex-row mb-6 justify-center order-2">
      <router-view />  
      </div>
    </main>
</template>

<script setup>
  import GlobalNavigation from './components/GlobalNavigation.vue';
</script>

<style>
.v-application__wrap {
  min-height: 15vh;
}
</style>
