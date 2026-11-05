import type { RouteRecordRaw } from 'vue-router'
import type { ModuleMenuMeta } from '../types'
import { resolveDottedPath } from './utils'

/**
 * Extend the routes meta
 *
 * The routes meta are extended with the module menu metas.
 *
 * @param routes - The routes
 * @param metas - The metas
 * @param parent - The parent
 * @returns The extended routes
 */
export function extendRoutesMeta(
  routes: RouteRecordRaw[],
  metas: ModuleMenuMeta[],
  parent = '',
): RouteRecordRaw[] {
  const extendedRoutes: RouteRecordRaw[] = []
  const prev = parent

  for (const r of routes) {
    const route = { ...r }

    const matched = metas.find((m) => {
      if ((!route.name && route.path === '') || route.path === '/') {
        return false
      }

      const path = resolveDottedPath(m.id)

      return (route.path.startsWith('/') || (route.name && (route.name as string).startsWith('/')))
        ? (path === route.name || path === route.path)
        || `${path}/` === route.path
        || `${path}/index` === route.path
        : path === `${parent}/${route.path}`
    })

    if (matched) {
      route.meta = {
        ...route.meta,
        id: matched.id,
        module: matched.module,
        name: matched.name,
        description: matched.description,
        icon: matched.icon,
      }
    }

    if (route.children && route.children.length > 0) {
      parent += (
        route.path.startsWith('/') && route.path !== ''
          ? route.path
          : `/${route.path}`
      ).replace(/\/$/, '')

      route.children = extendRoutesMeta(route.children, metas, parent)
    }

    parent = matched || (route.children && route.children.length > 0)
      ? prev
      : ''

    extendedRoutes.push(route)
  }

  return extendedRoutes
}
