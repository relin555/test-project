<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style>
*,*::after,*::before  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
