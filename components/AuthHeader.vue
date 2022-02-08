<template>
  <header class="header flex items-center justify-between flex-none">
    <!-- logo wrapper -->
    <div
      @click="$emit('logo', selectedComponent)"
      class="logo cursor-pointer flex items-center"
    >
      <img
        class="w-11 sm:w-14 md:w-20"
        src="../assets/img/logo.png"
        alt="logo"
      />
      <div class="flex flex-col">
        <span
          class="inline-block px-1 text-lg sm:text-xl md:text-2xl font-bold uppercase logo__name"
          >metsenat</span
        >
        <span
          class="inline-block text-white text-sm sm:text-lg uppercase font-semibold logo__club logo__club_green"
          >pro</span
        >
      </div>
    </div>

    <div class="flex items-center">
      <span class="avatar px-2 flex items-center flex-none cursor-pointer">
        Shoxrux
        <span
          class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-none ml-5"
        >
          <i class="fas fa-user"></i>
        </span>
      </span>

      <span
        @click="logout"
        class="cursor-pointer logout p-2 pb-0 ml-5 sm:ml-8 flex items-center justify-center transition"
      >
        <Icon name="log-out" />
        <span class="logout__text">log out</span>
      </span>
    </div>
  </header>
</template>

<script>
import Header from './Header.vue'
import Icon from './Icon.vue'
export default {
  components: { Icon },
  name: 'AuthHeader',
  Header,
  props: {
    selectedComponent: String,
  },

  methods: {
    logout() {
      const x = confirm('Are you sure?')
      if (x) {
        localStorage.removeItem('token')
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
