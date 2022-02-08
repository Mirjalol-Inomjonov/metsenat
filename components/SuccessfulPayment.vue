<template>
  <section class="successful text-center min-h-screen">
    <div class="successful__check inline-block">
      <Icon name="successful" />
    </div>
    <div class="successful__info">
      <h3>Ma’lumotlar tekshirish uchun yuborildi.</h3>
      <p>
        Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni
        aniqlashtiradi.
      </p>
    </div>
  </section>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon },
  name: 'SuccessfulPayment',
}
</script>

<style lang="scss" scoped></style>
