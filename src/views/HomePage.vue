<script setup>
import FormComponent from '../components/FormComponent.vue';
import { useStartProject } from '../stores/startProject.js';

const state = useStartProject();
</script>

<template>
  <div class="home">
    <div class="home__inner">
      <FormComponent v-if="state.show" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>