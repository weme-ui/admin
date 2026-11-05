import type { NavigationGuard, RouteLocationNormalized } from 'vue-router'
import type { RuntimeCallback } from './types'

interface MiddlewareHandler {
  (to: RouteLocationNormalized, from: RouteLocationNormalized): ReturnType<NavigationGuard>
}

/**
 * Define a middleware
 *
 * @param handler - The middleware handler
 * @returns The middleware callback
 */
export function defineMiddleware(handler: MiddlewareHandler): RuntimeCallback {
  return ({ router }) => {
    router.beforeEach((to, from) => {
      if (handler(to, from) === false) {
        return false
      }
    })
  }
}
