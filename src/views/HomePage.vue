<script setup>
import MyBtn from '../components/UI/MyBtn.vue';
import { useRouter } from 'vue-router' 

const router = useRouter();
</script>

<template>
  <main class="home conteiner">
    <section class="home__inner">
      <div class="home__left-colummn">
        <h1 class="home__title">
          Make<br/> Your<br/> Burger
        </h1>
      </div>
      <div class="home__right-colummn">
        <MyBtn @click="router.push('/setBurger')" class="home__btn">make<br/> burger</MyBtn>
        <img src="../assets/svg/burger.svg" alt="">
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.home  {
  &__inner  {
    display: flex;
    justify-content: space-between;
  }
  &__title  {
    color: var(--primary-black, #1F2939);
    margin-top: 338px;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
  }
  &__right-colummn  {
    position: relative;
  }
  &__btn  {
    position: absolute;
    top: 559px;
    left: -83px;
    display: flex;
    width: 180px;
    height: 180px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    background: var(--primary-primary, #5243C2);
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px; /* 125% */
    text-transform: uppercase;
    color: var(--primary-white, #FFF);
    text-align: center;
    transition: .2s;
  }
  &__btn:hover  {
    animation-name: animBtn;
    animation-timing-function: ease;
    scale: 1.2223;
    border-radius: 120px;
    animation: animBtn .3s ease .3s;
    background: var(--indigo-indigo-600, #473AA6);
  }
}
@keyframes animBtn {
  0% {
    scale: 1.2223;
  }
  
  60% {
    scale: 1.18;
  }
  100% {
    scale: 1.2223;
  }
}
</style>