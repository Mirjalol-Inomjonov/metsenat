<template>
  <section
    class="sponsor-content pt-16 pb-28 w-full"
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <h1 class="sponsor-content__title font-bold text-4xl">
      Homiy sifatida ariza topshirish
    </h1>

    <!-- physical and legal btns wrapper -->
    <div class="btns-wrapper flex">
      <button
        @click="toggle"
        :class="{ active: !isSponsorBtn }"
        class="btns-wrapper__btn w-full"
      >
        Jismoniy shaxs
      </button>
      <button
        @click="toggle"
        :class="{ active: isSponsorBtn }"
        class="btns-wrapper__btn w-full"
      >
        Yuridik shaxs
      </button>
    </div>

    <!-- form -->
    <form class="form">
      <!-- full name -->
      <div>
        <label class="form__lable block" for="fish"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
          v-model="form.fullName"
          id="fish"
          class="form__input w-full"
          type="text"
          required
          placeholder="Abdullayev Abdulla Abdulla o’g’li"
        />
      </div>

      <!-- phone number -->
      <div>
        <label class="form__lable block" for="phone">Telefon raqamingiz</label>
        <input
          v-mask="'(+998) ## ###-##-##'"
          v-model="myInputModel"
          type="tel"
          required
          id="phone"
          class="w-full form__input"
          placeholder="+998 00 000-00-00"
        />
      </div>

      <!-- price wrapper -->
      <div>
        <label class="form__lable">To‘lov summasi</label>

        <div class="price-wrapper mt-2 mb-7 grid gap-4">
          <!-- specified price amount btns -->
          <div
            class="btn"
            v-for="curentPrice in defaultPrices"
            :key="curentPrice"
          >
            <input
              type="button"
              :value="curentPrice + ' uzs'"
              @click=";(checkedPrice = curentPrice), (isOtherPrice = false)"
              :class="
                curentPrice == checkedPrice
                  ? 'btn__input w-full h-full active'
                  : 'btn__input w-full h-full'
              "
            />
            <span
              :class="
                curentPrice == checkedPrice
                  ? 'btn__badges active'
                  : 'btn__badges'
              "
            >
              <i class="fa fa-check"></i>
            </span>
          </div>

          <!-- other price amount btn-->
          <div class="btn">
            <input
              @click=";(isOtherPrice = true), (checkedPrice = 0)"
              :class="[
                isOtherPrice ? 'active' : '',
                'btn__input  btn__input_bg-white',
              ]"
              type="button"
              value="boshqa"
            />
            <span :class="isOtherPrice ? 'btn__badges active' : 'btn__badges'">
              <i class="fa fa-check"></i>
            </span>
          </div>

          <!-- other price amount input -->
          <div :class="[!isOtherPrice ? 'visible' : '', 'btn ']">
            <input
              v-model="checkedPrice"
              type="number"
              value="0"
              class="btn__input px-[16px] py-[12px]"
              placeholder="Summani kiriting"
            />
          </div>
        </div>
      </div>

      <!-- legal sponsor's company name  -->
      <div v-if="isSponsorBtn">
        <label for="company" class="form__lable block">Tashkilot nomi</label>
        <input
          v-model="form.companyName"
          type="text"
          placeholder="Orient group"
          id="company"
          class="form__input w-full"
        />
      </div>

      <button
        @click.prevent="$emit('selected-comp', selectedComponent)"
        class="w-full text-center uppercase form__submit"
      >
        yuborish
      </button>
    </form>

    <h1>Kiritilgan summa = {{ checkedPrice }}</h1>
  </section>
</template>

<script>
export default {
  name: 'UserInterface',
  props: {
    selectedComponent: String,
  },
  data() {
    return {
      myInputModel: '',
      defaultPrices: [1000000, 5000000, 7000000, 10000000, 30000000],
      checkedPrice: 1000000,
      isOtherPrice: false,
      otherPr: null,
      isSponsorBtn: false,

      form: {
        fullName: '',
        phone: '',
        curentPrice: null,
        companyName: '',
      },
    }
  },

  methods: {
    toggle() {
      return (this.isSponsorBtn = !this.isSponsorBtn)
    },
    ckeckbox() {
      this.priceCheckbox = !this.priceCheckbox
    },
  },
}
</script>

<style lang="scss" scoped></style>
