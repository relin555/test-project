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
  background: #e6e6e6;
}
body{
  max-width:1380px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
