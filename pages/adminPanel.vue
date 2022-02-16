<template>
  <section class="admin-panel">
    <Auth-header
      :selectedComponent="selectedComponent"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-once="true"
      @logo=";(selectedComponent = 'Dashboard'), (curentBtn = 'dashboard')"
    />
    <!-- Dashboard Navigation -->
    <nav
      class="dashboard-nav grid grid-cols-12"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div
        class="navigation flex items-center col-start-1 col-end-13 lg:col-end-7"
      >
        <button
          :class="[curentBtn == 'dashboard' ? 'curent' : '', 'btn']"
          @click=";(selectedComponent = 'Dashboard'), (curentBtn = 'dashboard')"
        >
          Dashboard
        </button>
        <button
          :class="[curentBtn == 'homiylar' ? 'curent' : '', 'btn']"
          @click=";(selectedComponent = 'Sponsor'), (curentBtn = 'homiylar')"
        >
          Homiylar
        </button>
        <button
          :class="[curentBtn == 'talabalar' ? 'curent' : '', 'btn']"
          @click=";(selectedComponent = 'Students'), (curentBtn = 'talabalar')"
        >
          Talabalar
        </button>
      </div>

      <div
        class="mt-7 lg:mt-0 col-start-1 lg:col-start-9 col-end-13 flex items-center gap-x-5"
      >
        <!-- Serach input -->
        <form class="search text-left w-full">
          <span class="search__icon">
            <i class="fas fa-search"></i>
          </span>
          <input
            v-model="search"
            class="search__input"
            type="search"
            placeholder="izlash"
          />
        </form>

        <!-- filter btn -->
        <button
          class="filter flex items-center justify-center text-center w-full h-full"
          @click="showModalWindow = !showModalWindow"
        >
          <i class="fas fa-filter inline-block mr-4"></i>
          <span class="inline-block">Filter</span>
        </button>
      </div>
    </nav>

    <!-- triple: Dashboard, Sponsor and Students Components -->
    <component
      :is="selectedComponent"
      :showModalWindow="showModalWindow"
      :search="search"
      @close-modal-window="showModalWindow = !showModalWindow"
    ></component>
  </section>
</template>

<script>
import AuthHeader from '~/components/AuthHeader.vue'
import Dashboard from '~/components/Dashboard.vue'
import Sponsor from '~/components/Sponsor.vue'
import Students from '~/components/Students.vue'
export default {
  name: 'adminPanel',
  components: { AuthHeader, Dashboard, Sponsor, Students },
  middleware: 'auth',
  emits: ['close-modal-window', 'logo'],

  data() {
    return {
      showModalWindow: false,
      curentselectedComponent: false,
      selectedComponent: 'Dashboard',
      prices: [1000000, 5000000, 7000000, 10000000, 30000000],
      pr: 1000000,
      curentBtn: 'dashboard',
      otherPr: null,
      isOtherPr: false,
      isSponsorBtn: false,
      search: '',
    }
  },
}
</script>

<style lang="scss" scoped></style>
