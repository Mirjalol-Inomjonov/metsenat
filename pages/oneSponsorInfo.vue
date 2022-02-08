<template>
  <section class="section relative">
    <Auth-header
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-duration="2000"
      data-aos-easing="ease-in-sine"
      @logo=";(selectedComponent = 'Dashboard'), (curentBtn = 'dashboard')"
    />
    <nav
      class="section-nav flex items-center px-[6%] py-4 md:py-[30px]"
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
    >
      <span
        class="section-nav__sponsor-name flex items-center text-lg leading-5 sm:text-xl md:text-2xl"
      >
        <nuxt-link
          to="/adminPanel"
          class="inline-block transition hover:text-blue-500"
        >
          <i class="fas fa-arrow-left cursor-pointer mr-5"></i>
        </nuxt-link>
        <span class="inline-block max-w-[160px] sm:max-w-[500px]">
          {{ this.$store.state.aboutOneSponsor.fullName }}
        </span>
      </span>
      <span
        v-if="this.$store.state.aboutOneSponsor.status == 'Yangi'"
        :class="[
          this.$store.state.aboutOneSponsor.status == 'Yangi' ? 'new' : '',
          'section-nav__sponsor-status inline-block',
        ]"
        >{{ this.$store.state.aboutOneSponsor.status }}
      </span>
      <span
        v-if="this.$store.state.aboutOneSponsor.status == 'Moderatsiyada'"
        :class="[
          this.$store.state.aboutOneSponsor.status == 'Moderatsiyada'
            ? 'in-mederation'
            : '',
          'section-nav__sponsor-status inline-block',
        ]"
        >{{ this.$store.state.aboutOneSponsor.status }}
      </span>
      <span
        v-if="this.$store.state.aboutOneSponsor.status == 'Tasdiqlangan'"
        :class="[
          this.$store.state.aboutOneSponsor.status == 'Tasdiqlangan'
            ? 'approved'
            : '',
          'section-nav__sponsor-status inline-block',
        ]"
        >{{ this.$store.state.aboutOneSponsor.status }}
      </span>
      <span
        v-if="this.$store.state.aboutOneSponsor.status == 'Bekor qilingan'"
        :class="[
          this.$store.state.aboutOneSponsor.status == 'Bekor qilingan'
            ? 'canceled'
            : '',
          'section-nav__sponsor-status inline-block',
        ]"
        >{{ this.$store.state.aboutOneSponsor.status }}
      </span>
    </nav>

    <!-- -------------------------- -->
    <main
      class="main w-screen flex items-center flex-col text-center min-h-screen pb-96"
    >
      <div class="inline-block">
        <div class="main-info" data-aos="zoom-in-up" data-aos-duration="2000">
          <div class="flex items-center justify-between">
            <h3 class="main-info__title text-base sm:text-2xl">Homiy haqida</h3>
            <button
              @click="showModalWindow = !showModalWindow"
              class="main-info__edit flex items-center px-3 py-2 sm:px-8 sm:py-3"
            >
              <Icon name="editbtn" />
              Tahrirlash
            </button>
          </div>

          <div class="main-info__avatar text-left flex items-center mb-6 mt-8">
            <span class="main-info__avatar-img inline-block mr-4">
              <Icon name="avatar" />
            </span>
            <span class="inline-block main-info__avatar-name">{{
              this.$store.state.aboutOneSponsor.fullName
            }}</span>
          </div>

          <div class="text-left grid grid-cols-8">
            <div
              class="main-info__phone-price col-start-1 col-end-9 sm:col-end-3"
            >
              <p>telefon raqam</p>
              <p>{{ this.$store.state.aboutOneSponsor.phone }}</p>
            </div>
            <div
              class="main-info__phone-price col-start-1 col-end-9 sm:col-start-5 sm:col-end-7"
            >
              <p>Homiylik summasi</p>
              <p>
                {{ this.$store.state.aboutOneSponsor.sponsorShipAmout }}
                <span> UZS</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="main__img">
        <Icon class="img" name="img" />
      </div>
    </main>

    <!-- EDIT MODAL WINDOW -->
    <div
      :class="[
        showModalWindow ? 'show' : '',
        'modal flex items-center justify-center',
      ]"
    >
      <div class="z-10 flex items-center justify-center">
        <!-- modal content -->
        <div class="modal__content">
          <!-- form card -->
          <div
            class="form-card min-w-[300px] sm:min-w-[576px] sm:max-h-[450px] md:max-h-[600px]"
          >
            <div class="form-card__header">
              <h3>Tahrirlash</h3>
              <span
                @click="showModalWindow = !showModalWindow"
                class="inline-block hover:rotate-180 transition"
              >
                <i class="fas fa-times cursor-pointer p-2 inline-block"></i>
              </span>
            </div>
            <div class="max-h-[450px] sm:min-h-[486px] overflow-y-auto pr-3">
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
              <form class="form h-full">
                <div>
                  <label class="form__lable block" for="fish"
                    >F.I.Sh. (Familiya Ism Sharifingiz)</label
                  >
                  <input
                    id="fish"
                    class="form__input w-full"
                    type="text"
                    required
                    placeholder="Abdullayev Abdulla Abdulla o’g’li"
                  />
                </div>

                <div>
                  <label class="form__lable block" for="phone"
                    >Telefon raqam</label
                  >
                  <input
                    id="phone"
                    v-mask="'(+998) ## ###-##-##'"
                    class="form__input w-full"
                    type="number"
                    required
                    placeholder="+998 00 000-00-00"
                  />
                </div>
                <div>
                  <label class="form__lable" for="select">holati</label>
                  <select class="form__input" id="select">
                    <option value="new">Yangi</option>
                    <option value="inModeration">Moderatsiyada</option>
                    <option value="approved" selected>Tasdiqlangan</option>
                    <option value="canceled">Bekor qilingan</option>
                  </select>
                </div>
                <div>
                  <label class="form__lable" for="select">To‘lov turi</label>
                  <select class="form__input" id="select">
                    <option value="new" selected>Pul o‘tkazmalari</option>
                    <option value="new">Naqd pul ko'rinishda</option>
                  </select>
                </div>
                <!-- legal sponsor's company name  -->
                <div v-if="isSponsorBtn">
                  <label for="company" class="form__lable block"
                    >Tashkilot nomi</label
                  >
                  <input
                    type="text"
                    placeholder="Orient group"
                    id="company"
                    class="form__input w-full"
                  />
                </div>

                <div class="form-card__footer text-right">
                  <button class="form-card__footer-success-btn" type="button">
                    <Icon name="save" />
                    saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        @click="showModalWindow = !showModalWindow"
        class="modal__bgc modal__bgc_bgc-black"
      ></div>
    </div>
  </section>
</template>

<script>
import AuthHeader from '~/components/AuthHeader.vue'
import Icon from '~/components/Icon.vue'

export default {
  components: { AuthHeader, Icon },
  name: 'oneSponsorInfo',
  data() {
    return {
      isOtherPr: false,
      isSponsorBtn: false,
      showModalWindow: false,
    }
  },
  methods: {
    toggle() {
      return (this.isSponsorBtn = !this.isSponsorBtn)
    },
  },
}
</script>

<style lang="scss" scoped></style>
