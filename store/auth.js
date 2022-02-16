export const state = () => ({
  isAdmin: {
    login: null,
    password: null,
    reCAPTCHA: false,
  },
})

export const mutations = {
  SET_USER(state, data) {
    state.isAdmin.login = data.login
    state.isAdmin.password = data.password
    state.isAdmin.reCAPTCHA = data.reCAPTCHA
  },
}
