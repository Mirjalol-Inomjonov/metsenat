<template>
  <section class="section">
    <Auth-header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2500"
      data-aos-once="true"
    />

    <nav
      class="section-nav flex items-center px-[6%] py-4 md:py-[30px]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <span
        class="section-nav__sponsor-name inline-block text-lg sm:text-xl md:text-2xl"
      >
        <nuxt-link to="/adminPanel" class="transition hover:text-blue-500">
          <i
            class="fas fa-arrow-left cursor-pointer inline-block mr-2 sm:mr-4 md:mr-5"
          ></i>
        </nuxt-link>
        Talaba qo‘shish
      </span>
    </nav>

    <main class="main flex justify-center h-full">
      <div
        class="main-info max-w-[350px] sm:min-w-[790px] mb-[78px]"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <form @submit.prevent="addStudent" class="form w-full">
          <div class="flex items-center flex-wrap sm:flex-nowrap sm:gap-[28px]">
            <div class="w-full">
              <label class="form__lable" for="name"
                >F.I.Sh. (Familiya Ism Sharif)</label
              >
              <input
                v-model="student.fullName"
                class="form__input"
                type="text"
                id="name"
                placeholder="Abdullayev Abdulla Abdulla o’g’li"
                required
              />
            </div>

            <div class="w-full">
              <label class="form__lable" for="phone">Telefon raqam</label>
              <input
                v-model="student.phone"
                v-mask="'(+998) ## ###-##-##'"
                class="form__input"
                type="tel"
                id="phone"
                placeholder="+998 00 000-00-00"
                required
              />
            </div>
          </div>

          <div class="w-full">
            <label class="form__lable" for="otm">OTM</label>
            <select v-model="student.otm" class="form__input" id="otm">
              <option value="OTM ni tanlang" disabled>OTM ni tanlang</option>

              <option
                v-for="(otm, i) in this.$store.state.otmsName"
                :key="i"
                :value="otm"
              >
                {{ otm }}
              </option>
            </select>
          </div>

          <div class="flex items-center flex-wrap sm:flex-nowrap sm:gap-[28px]">
            <div class="w-full">
              <label class="form__lable" for="typeStudent"
                >Talabalik turi</label
              >
              <select
                v-model="student.studentType"
                class="form__input"
                name="typeStudent"
                id="typeStudent"
              >
                <option
                  v-for="(item, i) in this.$store.state.studentTypes"
                  :key="i"
                  :value="item"
                  selected
                >
                  {{ item }}
                </option>
              </select>
            </div>

            <div class="w-full">
              <label class="form__lable" for="contract">Kontrakt summa</label>
              <input
                v-model="student.contractAmount"
                class="form__input"
                type="number"
                id="contract"
                placeholder="Summani kiriting"
                required
              />
            </div>
          </div>

          <div class="grid justify-items-end">
            <button class="form__submit flex items-center">
              <Icon name="plus" class="mr-[14px]" /> Qo‘shish
            </button>
          </div>
        </form>
      </div>
    </main>
    <pre>{{ student }}</pre>
  </section>
</template>

<script>
import AuthHeader from '~/components/AuthHeader.vue'
import Icon from '~/components/Icon.vue'
export default {
  name: 'addStudent',
  components: { Icon, AuthHeader },
  middleware: 'auth',

  data() {
    return {
      student: {
        fullName: '',
        phone: '',
        otm: 'OTM ni tanlang',
        studentType: 'Bakalavr',
        contractAmount: '',
      },
    }
  },
  methods: {
    addStudent() {
      this.$store.commit('ADD_NEW_STUDENT', this.student)
      this.$router.push({ name: 'adminPanel' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
