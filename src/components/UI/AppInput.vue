<script setup>
defineProps( [ 'modelValue' ] );
defineEmits( [ 'update:modelValue' ] );
</script>

<template>
  <input 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
  input {
    width: 300px;
    padding: 5px 5px;
    outline: none;
    border: none;
  }
</style>