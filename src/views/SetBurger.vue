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
            <h2 class="set-burger__summary-title"></h2>
            <hr />
            <div class="set-burger__summary-chekout-wrapper">
              <h2 class="set-burger__summary-price"></h2>
              <MyBtn class="set-burger__summary-btn">Checkout</MyBtn>
            </div>
            <h4 class="set-burger__summary-gift">Build a <span>$10</span> Burger and Get a Gift</h4>
            <div class="set-burger__summary-value-wrapper">
              <div class="set-burger__summary-wrapper">
                <div class="set-burger__summery-items">
                  <img src="" alt="" class="set-burger__summary-item-img">
                  <p class="set-burger__summary-item-currency">{{  }} <span class="set-burger__summary-item-title"></span></p>
                </div>
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