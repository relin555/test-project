<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header conteiner">
    <div class="header__inner">
      <div class="header__left-row">
        <div class="header__logo">
        <img src="../assets/svg/logo.svg" alt="">
        </div>
        <nav class="header__nav-wrapper">
          <RouterLink to="/">
          <span>Discover</span>
          <div class="header__nav-active"></div>
          </RouterLink>
          <RouterLink to="/setBurger">
            <span>Make Your Burger</span> 
            <div class="header__nav-active"></div>
          </RouterLink>
        </nav>
      </div>
      <div class="header__right-row">
        <div class="header__contact">
          <a href="tel:+88004378722" class="header__btn">
            <img src="../assets/svg/phone-fill.svg" alt="phone">
            <span>Call Me Back</span>
          </a>
          <div class="header__phone-number">
            <span>8 800 437-87-22</span>
          </div>
        </div>
        <div class="header__user-auth">
          <div class="header__user-wrapper">
            <img src="../assets/user/avatar.svg" alt="" class="header__user-icon">
          </div>
        </div>
      </div>
     
    </div>
  </header>
</template>



<style lang="scss" scoped>
.header {
  padding-top: 32px;
  &__inner  {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__left-row{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__right-row  {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__logo {
    margin-right: 80px;
  }
  &__nav-wrapper {
    display: flex;
  }
  &__nav-wrapper > a  {
    margin-right: 59px;
    color: rgba(31, 41, 57, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  &__nav-wrapper > a:last-child  {
    margin-right: 0px;
  }
  &__btn  {
    display: flex;
    align-items: center;
    margin-right: 60px;
    background:rgba(255, 237, 237, 1);
    border-radius: 99px;
    padding: 6px 12px;

  }
  &__btn > span {
    margin-left: 4px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: rgba(255, 77, 79, 1);
  }
  &__contact  {
    display: flex;
    align-items: center;
    margin-right: 60px;
  }
  &__phone-number {
    margin-right: 60px;
  }
  &__phone-number > span {
    color: rgba(31, 41, 57, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
  }
  &__user-auth {
    display: flex;
width: 58px;
height: 58px;
justify-content: center;
align-items: center;
background: rgba(245, 245, 255, 1);
border-radius: 99px;
  }
  &__user-wrapper {

  }
        
}
</style>