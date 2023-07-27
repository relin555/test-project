<script setup>
import MyBtn from '../components/UI/MyBtn.vue';
import { useStartProject } from '../stores/startProject.js';

const store = useStartProject();

</script>

<template>
  <header class="header">
    <div class="header__inner">
     <h1 v-if="store.show" class="header__title">Welcom</h1>
    <MyBtn @click="store.openShow()" class="header__btn">Get Start</MyBtn>
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