<template>
  <!-- auth modal -->
  <div class="auth flex items-center justify-center flex-col">
    <!-- logo wrapper -->
    <div class="logo flex items-center">
      <img src="../assets/img/logo.png" alt="logo" />
      <span class="inline-block px-1 text-3xl font-bold uppercase logo__name"
        >metsenat</span
      >
      <span class="inline-block text-white uppercase font-semibold logo__club"
        >club</span
      >
    </div>

    <!-- auth form -->
    <div class="auth-content">
      <form class="auth-content-form">
        <h2 class="auth-content-form__title">Kirish</h2>
        <div>
          <label class="auth-content-form__lable block" for="login"
            >lOGIN</label
          >
          <input
            class="auth-content-form__input"
            type="text"
            placeholder="adm8904"
            id="login"
          />
        </div>

        <div>
          <label class="auth-content-form__lable block" for="password"
            >PAROL</label
          >
          <input
            class="auth-content-form__input"
            type="password"
            id="password"
            placeholder="********"
          />
        </div>

        <!-- check robot content -->
        <div class="check-robot flex items-center justify-between">
          <div class="flex items-center">
            <input type="checkbox" id="check" />
            <label class="pl-2" for="check">I’m not a robot</label>
          </div>

          <div class="robot flex flex-col justify-center items-center">
            <div class="robot__icon inline-block">
              <img src="../assets/img/check-robot.png" alt="" />
            </div>
            <span class="inline-block">reCAPTCHA</span>
            <span class="inline-block">Privacy - Terms</span>
          </div>
        </div>

        <button class="auth-content-form__submit w-full">Kirish</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthModal',
}
</script>
