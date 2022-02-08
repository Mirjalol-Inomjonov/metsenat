<template>
  <!-- <Tutorial /> -->
  <div class="index relative">
    <Header
      :selectedComponent="selectedComponent"
      :showModalWindow="showModalWindow"
      @show-modal="showModalWindow = !showModalWindow"
      @selected-comp="selectedComponent = 'UserInterface'"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
    />

    <main
      class="main grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-7 md:gap-10 lg:gap-24"
    >
      <!-- left window -->
      <div class="main__form">
        <component
          :is="selectedComponent"
          :selectedComponent="selectedComponent"
          @selected-comp="selectedComponent = 'SuccessfulPayment'"
        ></component>
      </div>

      <!--This card is info about metsenat || right window -->
      <div
        class="info relative"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="2000"
      >
        <div class="info-content relative z-20">
          <h2
            class="info-content__title text-base sm:text-lg md:text-xl"
            data-aos="zoom-in-up"
          >
            <img
              class="quotes-left"
              src="../assets/img/quotes-left.png"
              alt=""
            />
            Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
            Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
            qoʻymaslik kerak.
            <img
              class="quotes-right"
              src="../assets/img/quotes-right.png"
              alt=""
            />
          </h2>
          <!-- president card starts -->
          <div class="president flex items-center">
            <div class="president__img mr-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Shavkat_Mirziyoyev_official_portrait_%28cropped_2%29.jpg"
                alt="uzb president's img"
              />
            </div>
            <div class="flex flex-col">
              <span class="president__fullname inline-block"
                >Shavkat Mirziyoyev</span
              >
              <span class="president__state inline-block"
                >O‘zbekiston Respublikasi Prezidenti</span
              >
            </div>
          </div>
          <!--  president card ends -->
        </div>

        <div class="info__img absolute bottom-0 left-0 z-10">
          <Icon name="img" />
        </div>
      </div>
    </main>

    <!-- Auth Modal Window Component -->
    <div
      :class="[
        showModalWindow ? 'show' : '',
        'modal flex items-center justify-center',
      ]"
    >
      <div class="z-10 flex items-center flex-col">
        <!-- logo wrapper -->
        <nuxt-link to="/">
          <div class="logo flex items-center">
            <img src="../assets/img/logo.png" alt="logo" />
            <span
              class="inline-block px-1 text-3xl font-bold uppercase logo__name"
              >metsenat</span
            >
            <span class="inline-block uppercase font-semibold logo__club"
              >club</span
            >
          </div>
        </nuxt-link>

        <!-- modal content -->
        <div class="modal__content mt-10 min-w-[379px]">
          <!-- form card -->
          <div class="form-card">
            <form class="form" @submit.prevent="login">
              <div class="flex items-center justify-between mb-10">
                <h2 class="form__title">Kirish</h2>
                <i
                  @click="showModalWindow = !showModalWindow"
                  class="fas fa-times cursor-pointer inline-block text-gray-300 text-3xl p-1 hover:rotate-180 transition"
                ></i>
              </div>

              <div>
                <label class="form__lable block" for="login">lOGIN</label>
                <input
                  class="form__input"
                  type="text"
                  placeholder="admin8904"
                  id="login"
                  v-model="authForm.login"
                />
              </div>

              <div>
                <label class="form__lable block" for="password">PAROL</label>
                <div class="relative form__input form__input_p0-m0">
                  <input
                    ref="password"
                    class="w-full h-full px-4 py-3 pr-12 outline-none"
                    type="password"
                    id="password"
                    placeholder="********"
                    v-model="authForm.password"
                  />
                  <i
                    @click="showPasswordFunc"
                    :class="[
                      showPassword ? 'fa-eye' : 'fa-eye-slash',
                      'fas  inline-block absolute right-3 top-1/2 translate-y-[-50%] text-lg cursor-pointer text-gray-400 hover:text-gray-500 transition',
                    ]"
                  ></i>
                </div>

                <!-- validation text -->
                <span
                  :class="[
                    authForm.password.length > 0 && authForm.password.length < 8
                      ? 'visible'
                      : 'invisible',
                    'text-red-500 text-xs mb-7 inline-block',
                  ]"
                  >password uzunligi 8 tadan kam</span
                >
              </div>

              <!-- check robot content -->
              <div class="form-check-robot flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    id="check"
                    class="w-5 h-5 border-gray-500 border-2"
                    v-model="authForm.checkRobot"
                  />
                  <label class="pl-2 cursor-pointer" for="check"
                    >I’m not a robot</label
                  >
                </div>

                <div class="flex flex-col justify-center items-center">
                  <div class="form-check-robot__icon inline-block">
                    <Icon name="checkRobot" />
                  </div>
                  <span class="form-check-robot__subtitle">reCAPTCHA</span>
                  <span class="form-check-robot__subtitle"
                    >Privacy - Terms</span
                  >
                </div>
              </div>

              <button class="form__submit w-full">Kirish</button>
            </form>
          </div>
        </div>
      </div>

      <div @click="showModalWindow = !showModalWindow" class="modal__bgc"></div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Icon from '~/components/Icon.vue'
import SuccessfulPayment from '~/components/SuccessfulPayment.vue'
import UserInterface from '~/components/UserInterface.vue'
export default {
  components: { Header, UserInterface, SuccessfulPayment, Icon },
  name: 'IndexPage',
  emits: ['show-modal', 'selected-comp'],
  data() {
    return {
      showPassword: false,
      showModalWindow: false,
      selectedComponent: 'UserInterface',

      authForm: {
        login: '',
        password: '',
        checkRobot: false,
      },

      isAuthForm: {
        login: 'admin777',
        password: '12345678',
        checkRobot: true,
      },
    }
  },

  methods: {
    showPasswordFunc() {
      this.showPassword = !this.showPassword

      if (this.showPassword && this.$refs.password.type === 'password') {
        this.$refs.password.type = 'text'
      } else {
        this.$refs.password.type = 'password'
      }
    },

    login() {
      // this.isAuthForm.checkRobot === this.authForm.checkRobot
      if (
        this.isAuthForm.login === this.authForm.login &&
        this.isAuthForm.password === this.authForm.password
      ) {
        localStorage.setItem('token', 'token_value')
        this.$router.push({ name: 'adminPanel' })
      } else {
        alert(
          `Login yoki Password noto'g'ri kiritilgan!, iltimos qayta tekshiring.`
        )
      }
    },
  },
}
</script>
