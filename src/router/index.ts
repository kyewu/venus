import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // pass the generated routes written by the plugin
  routes: setupLayouts(routes),
})

export default router
