<script setup>
import { ref } from 'vue';
import AppInput from '../components/UI/AppInput.vue';
import AppBtn from '../components/UI/AppBtn.vue'

const UserAppObj = ref( {
  userApp: {
    name: null,
    surname: null,
    age: null
  }
} );
</script>

<template>
  <form @submit.prevent="getUser">
    <AppInput type="text" v-model="UserAppObj.name" />
    <AppInput type="text" v-model="UserAppObj.surname" />
    <AppInput type="number" v-model="UserAppObj.age" />
    <AppBtn>start</AppBtn>
  </form>
</template>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input{
  margin-bottom: 10px;
  border: 2px solid #26149d;
  border-radius: 10px;
}
button{
  margin-top: 20px;
  border: 2px solid rgb(217, 117, 117);
  padding: 15px 40px;
  border-radius: 15px;
  background: #7f7f91;
  box-shadow: 6px 8px 9px 4px rgb(185 145 145 / 52%);
  color: red;
  font-size: 20px;
  letter-spacing: 3px;
}
</style>