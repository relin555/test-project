<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <RouterView />
    <FooterComponent/>
  </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
*,*::after,*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body{
  max-width: 1920px;
  padding: 0 60px;
  height: 100%;
}
li  {
  list-style-type: none;
}
a {
  list-style-type: none;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; 
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.conteiner{
  padding: 0 128px;
}
.router-link-active > .header__nav-active,.router-link-exact-active > span {
  font-weight: 600;
}
.router-link-active > .header__nav-active,.router-link-exact-active > .header__nav-active{
  margin-top: 12px;
  height: 2px;
  font-weight: 600;
  border-radius: 99px;
  background: #5243C2;
}
</style>
