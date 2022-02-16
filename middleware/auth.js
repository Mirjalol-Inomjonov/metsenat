export default function ({ redirect, store }) {
  const isAuthenticated = !!(
    store.state.auth.isAdmin.login || store.state.auth.isAdmin.password
  )
  if (!isAuthenticated) {
    redirect({ name: 'index' })
  }
}
