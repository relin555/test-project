<script setup>
const payment = [
  { id: 1, svgName: 'visa' },
  { id: 2, svgName: 'masterCard' },
  { id: 3, svgName: 'googlePay' },
  { id: 4, svgName: 'applePay' },
  { id: 5, svgName: 'payPal' },
  { id: 6, svgName: 'bitcoin' },
  { id: 7, svgName: 'etherium' },
];
const newImg = ( img ) =>
{
  return new URL( `../assets/payment/${ img }.svg`, import.meta.url )
};
</script>

<template>
  <footer class="footer conteiner">
    <div class="footer__inner">
      <div class="footer__left-row">
        <div class="footer__list">
          <div class="footer__copy">
            <p>2022. Make Your Burger</p>
          </div>
          <div class="footer__policy">
            <a href="#">Privacy Policy</a>
          </div>
          <div class="footer__typo"></div>
          <div class="footer__terms">
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div class="footer__right-row">
        <ul class="footer__payment-list">
          <li class="footer__paymen-link" v-for="item in payment" :key="item.id">
            <a href="" class="footer__payment-link">
              <img :src="`${newImg(item.svgName)}`" :alt="item.svgName">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    margin-bottom: 32px;
    &__inner  {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__list {
      display: flex;
    }
    &__payment-list {
      display: flex;
      align-items: center;
    }
    &__paymen-link  {
      margin-right: 8px;
    }
    &__paymen-link:last-child {
      margin-right: 0;
    }
  }
</style>