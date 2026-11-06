import type { Component } from 'vue'
import type { Module, ModuleMenuMeta, RuntimeCallback, RuntimeContext, RuntimeHooks } from './types'
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { registerDevToolsPlugin } from './devtools/plugin'
import { Hook } from './internal/hook'
import { loadExtensions, loadMiddlewares, loadModules } from './internal/loader'
import { extendRoutesMeta } from './internal/meta'
import { MODULES_INJECTION_KEY } from './module'

interface RuntimeOptions {
  /**
   * The root container to mount the app into.
   *
   * @default '#app'
   */
  rootContainer?: string | Element
}

/**
 * Create the runtime
 *
 * The runtime is used to create the application and the router.
 *
 * @param App - The app component
 * @param fn - The callback function
 * @param options - The options
 * @returns The runtime context
 */
export function createRuntime(
  App: Component,
  fn?: RuntimeCallback,
  options?: RuntimeOptions,
) {
  const { rootContainer = '#app' } = options || {}

  async function createVueApp() {
    const app = createApp(App)
    const head = createHead()
    const pinia = createPinia()

    const hooks = new Hook<RuntimeHooks>()

    const modules = ref<Module[]>([])
    const metas = ref<ModuleMenuMeta[]>([])

    // ⚠️ Must be loaded before routes are extended
    loadModules(modules, metas, hooks)

    const sortedMetas = metas.value.sort((a, b) => a.id.localeCompare(b.id))
    const layoutRoutes = setupLayouts(routes)
    const extendedRoutes = extendRoutesMeta(layoutRoutes, sortedMetas)

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
      routes: extendedRoutes,
    })

    const context: RuntimeContext = {
      app,
      router,
      head,
      pinia,
      hooks,
      modules,
      metas,
    }

    loadExtensions(context)
    loadMiddlewares(context)

    if (import.meta.env.DEV) {
      registerDevToolsPlugin(app, context)
    }

    app
      .use(head)
      .use(pinia)
      .use(router)

    await fn?.(context)

    return context
  }

  (async () => {
    const ctx = await createVueApp()

    ctx.app.provide(MODULES_INJECTION_KEY, ctx.modules)
    ctx.app.mount(rootContainer)

    await ctx.router.isReady()

    ctx.hooks.callHook('runtime:ready', ctx)

    if (import.meta.hot) {
      handleHotUpdate(ctx.router)
    }
  })()

  return createVueApp
}
