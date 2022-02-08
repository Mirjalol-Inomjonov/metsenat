<template>
  <section class="admin-panel">
    <Auth-header
      :selectedComponent="selectedComponent"
      @logo=";(selectedComponent = 'Dashboard'), (curentBtn = 'dashboard')"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
    />
    <!-- Dashboard Navigation -->
    <nav
      class="dashboard-nav grid grid-cols-12"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        class="navigation flex items-center col-start-1 col-end-13 lg:col-end-7"
      >
        <button
          @click=";(selectedComponent = 'Dashboard'), (curentBtn = 'dashboard')"
          :class="[curentBtn == 'dashboard' ? 'curent' : '', 'btn']"
        >
          Dashboard
        </button>
        <button
          @click=";(selectedComponent = 'Sponsor'), (curentBtn = 'homiylar')"
          :class="[curentBtn == 'homiylar' ? 'curent' : '', 'btn']"
        >
          Homiylar
        </button>
        <button
          @click=";(selectedComponent = 'Students'), (curentBtn = 'talabalar')"
          :class="[curentBtn == 'talabalar' ? 'curent' : '', 'btn']"
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
          @click="showModalWindow = !showModalWindow"
          class="filter flex items-center justify-center text-center w-full h-full"
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
      @close-modal-window="showModalWindow = !showModalWindow"
      :search="search"
    ></component>
  </section>
</template>

<script>
import AuthHeader from '~/components/AuthHeader.vue'
import Dashboard from '~/components/Dashboard.vue'
import Sponsor from '~/components/Sponsor.vue'
import Students from '~/components/Students.vue'
export default {
  components: { AuthHeader, Dashboard, Sponsor, Students },
  name: 'adminPanel',
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
