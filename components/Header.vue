<template>
  <header class="header py-4 flex items-center justify-between relative z-50">
    <!-- logo wrapper -->
    <div
      @click.prevent="$emit('selected-comp', selectedComponent)"
      class="logo cursor-pointer flex items-center"
    >
      <img src="../assets/img/logo.png" alt="logo" />
      <span class="inline-block px-1 text-3xl font-bold uppercase logo__name"
        >metsenat</span
      >
      <span class="inline-block text-white uppercase font-semibold logo__club"
        >club</span
      >
    </div>

    <!-- navigation starts -->
    <nav :class="isNavbar ? 'nav active' : 'nav'">
      <ul class="nav-link">
        <li class="inline-block ml-10 nav-link__item">
          <nuxt-link to="#">Asosiy</nuxt-link>
        </li>
        <li class="inline-block ml-10 nav-link__item">
          <nuxt-link to="#">Grantlar</nuxt-link>
        </li>
        <li class="inline-block ml-10 nav-link__item">
          <nuxt-link to="#">Soliq imtiyozlari</nuxt-link>
        </li>
        <li
          @click="$emit('show-modal', showModalWindow)"
          class="ml-10 nav-link__item flex items-center justify-center cursor-pointer"
        >
          <Icon name="loginBtn" class="transition" />
          <span class="inline-block">Kirish</span>
        </li>
      </ul>
    </nav>

    <!-- burger -->
    <span
      @click="isNavbar = !isNavbar"
      :class="isNavbar ? 'burger active' : 'burger'"
    >
      <i :class="[isNavbar ? 'fa-times' : 'fa-bars', 'fas']"></i>
    </span>
  </header>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon },
  name: 'HeaderComponent',
  props: {
    showModalWindow: Boolean,
    selectedComponent: String,
  },

  data() {
    return {
      isNavbar: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
