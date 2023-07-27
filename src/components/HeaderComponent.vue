<script setup>
import AppBtn from './UI/AppBtn.vue';
import { useStartProject } from '../stores/startProject.js';

const store = useStartProject();

</script>

<template>
  <header class="header">
    <div class="header__inner">
     <h1 class="header__title">Welcom</h1>
    <AppBtn @click="store.openShow()" class="header__btn">Get Start</AppBtn>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 30px 0;
  &__inner  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title  {
    font-size: 50px;
    margin-bottom: 20px;
  }
  &__btn  {
    padding: 20px 35px;
    border-radius: 10px;
    background: #d8d8f1;
  }
}
</style>