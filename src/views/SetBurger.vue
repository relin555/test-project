<script setup>
  import MyBtn from '../components/UI/MyBtn.vue'
</script>

<template>
  <mian class="set-burger conteiner">
    <section class="set-burger__inner">
      <div class="set-burger__top-content">
        <h1 class="set-burger__title">Make<br/> Your<br/> Burger</h1>
        <div class="set-burger__constructor-burger-wrapper">
          <img src="../assets/svg/burgerSet.svg" alt="" class="set-burger__img">
        </div>
        <div class="set-burger__summary">
          <div class="set-burger__summary-wrapper">
            <h2 class="set-burger__summary-title">Summary</h2>
            <hr class="set-burger__summary-hr"/>
            <div class="set-burger__summary-chekout-wrapper">
              <h2 class="set-burger__summary-price">${{ 0 }}</h2>
              <MyBtn class="set-burger__summary-btn">Checkout</MyBtn>
            </div>
            <h4 class="set-burger__summary-gift">Build a <span>$10</span> Burger and Get a Gift</h4>
            <div class="set-burger__summary-value-wrapper">
              <div class="set-burger__summery-items">
                <img src="../assets/summary/watch.svg" alt="" class="set-burger__summary-item-img">
                <p class="set-burger__summary-item-currency">0
                  <span class="set-burger__summary-item-title">min</span>
                </p>
              </div>
              <div class="set-burger__summery-items">
                <img src="../assets/summary/speed.svg" alt="" class="set-burger__summary-item-img">
                <p class="set-burger__summary-item-currency">0
                  <span class="set-burger__summary-item-title">oz</span>
                </p>
              </div>
              <div class="set-burger__summery-items">
                <img src="../assets/summary/fire.svg" alt="" class="set-burger__summary-item-img">
                <p class="set-burger__summary-item-currency">0
                  <span class="set-burger__summary-item-title">kcal</span>
                </p>
              </div>      
            </div>
          </div>
        </div>
      </div>
      <div class="set-burger__bottom-content">
        <div class="set-burger__items-wrapper">
          <ul class="set-burger__items-card">
            <li class="set-burger__item-card">
              <img src="" alt="" class="set-burger__item-img">
              <h4 class="set-burger__item-title"></h4>
              <div class="set-burger__item-counter-wrapper">
                <MyBtn class="set-burger__item-btn">-</MyBtn>
                <span class="set-burger__item-count">{{  }}</span>
                <MyBtn class="set-burger__item-btn">+</MyBtn>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </mian>
</template>

<style lang="scss" scoped>
 .set-burger {
  &__inner  {
    display: flex;
    flex-direction: column;
  }
  &__top-content  {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title  {
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    color: rgba(31, 41, 57, 1);
  }
  &__summary-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 405px;
  }
  &__summary-title  {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: rgba(31, 41, 57, 1);
    margin-bottom: 24px;
  }
  &__summary-hr {
    background: rgba(245, 245, 255, 1);
    height: 2px;
    border: none;
  }
  &__summary-chekout-wrapper  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 17px;
  }
  &__summary-price  {
    color: var(--primary-primary, #5243C2);
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  &__summary-btn {
    padding: 16px;
    display: flex;
    width: 192px;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    background: var(--primary-primary, #5243C2);
    color: var(--primary-titan-white, #F5F5FF);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }
  &__summary-gift {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: var(--primary-black, #1F2939);
    margin-bottom: 24px;
  }
  &__summary-gift > span {
    color: var(--primary-danger, #FF4D4F);
    font-weight: 600;
  }
  &__summary-value-wrapper  {
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
    border-radius: 32px;
    background: var(--primary-titan-white, #F5F5FF);
  }
  &__summery-items  {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  &__summery-items > img {
    margin-right: 8px;
  }
 }
</style>