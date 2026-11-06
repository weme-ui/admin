import type { Ref } from 'vue'
import type { ModuleMenu, ModuleMenuDefinition, ModuleMenuMeta, ModuleMenuType } from '../types'
import { resolveDottedPath, sortByAsc } from './utils'

/**
 * Define a menu for a module
 *
 * The menu is a collection of items that are used to build the application navigation.
 *
 * @param moduleId - The module id
 * @param definition - The menu definition
 * @param parentId - The parent menu id
 * @returns The menu
 */
export function defineMenu(moduleId: string, definition: ModuleMenuDefinition, parentId?: string): ModuleMenu {
  const menuId = resolveMenuId(definition.id, parentId)
  const menuType = resolveMenuType(definition.id, definition.children)
  const menuPath = ['index', 'page', 'group'].includes(menuType)
    ? resolveMenuPath(menuId)
    : undefined

  const newMenu: ModuleMenu = {
    id: menuId,
    type: menuType,
    module: moduleId,
    label: definition.label,
    description: definition.description,
    tooltip: definition.tooltip,
    icon: definition.icon,
    activeIcon: definition.activeIcon || definition.icon,
    path: menuPath,
    sort: definition.sort || 0,
    hidden: definition.hidden === undefined
      ? false
      : definition.hidden,
  }

  if (definition.children && definition.children.length > 0) {
    definition.children
      .sort(sortByAsc)
      .forEach((child) => {
        newMenu.children = newMenu.children || []
        newMenu.children.push(defineMenu(moduleId, child, menuId))
      })

    newMenu.path = getDeepestMenu(newMenu).path
  }

  return newMenu
}

/**
 * Update the menu meta
 *
 * The menu meta is used to store the menu information.
 *
 * @param metas - The module menu metas
 * @param menus - The defined module menus
 */
export function updateMensMeta(metas: Ref<ModuleMenuMeta[]>, menus: ModuleMenu[]) {
  menus.forEach((menu) => {
    metas.value.push({
      id: menu.id,
      module: menu.module,
      name: menu.label,
      description: menu.description,
      icon: menu.icon,
    })

    if (menu.children && menu.children.length > 0) {
      updateMensMeta(metas, menu.children)
    }
  })
}

/**
 * Get the deepest menu
 *
 * The deepest menu is the menu that has the deepest children.
 *
 * @param menu - The menu
 * @returns The deepest menu
 */
export function getDeepestMenu(menu: ModuleMenu): ModuleMenu {
  if (!menu.children || menu.children.length === 0) {
    return menu
  }

  const availableFilter = (m: ModuleMenu) => m.hidden !== true && ['index', 'page'].includes(m.type)
  const hasChildren = menu.children.some(availableFilter)

  if (hasChildren) {
    const availableChildren = menu.children
      .filter(availableFilter)
      .sort(a => a.type === 'index'
        ? -1
        : 1)
    return getDeepestMenu(availableChildren[0])
  }

  return menu
}

/**
 * Resolve a menu id
 *
 * The menu id is a string that is used to identify the menu.
 * It is resolved by concatenating the parent id and the menu id,
 * and removing the leading `#` character.
 *
 * @param menuId - The menu id
 * @param parentId - The parent menu id
 * @returns The resolved menu id
 */
function resolveMenuId(menuId: string, parentId?: string): string {
  return (parentId
    ? `${parentId}.${menuId}`
    : menuId).replace(/#/, '')
}

/**
 * Resolve a menu type
 *
 * The menu type is a string that is used to identify the menu type.
 * It is resolved by checking the children menus, and if there are no children,
 * it is resolved to the menu id.
 *
 * @param menuId - The menu id
 * @param children - The children menus
 * @returns The menu type
 */
function resolveMenuType(menuId: string, children?: ModuleMenuDefinition[]): ModuleMenuType {
  if (menuId === 'index') {
    return 'index'
  }
  else if (menuId.startsWith('#')) {
    return 'action'
  }
  else if (children && children.length > 0) {
    if (
      children.some(child => child.id === 'index')
      || children.filter(child => child.id.startsWith('#')).length === children.length
    ) {
      return 'page'
    }

    return 'group'
  }

  return 'page'
}

/**
 * Resolve a menu path
 *
 * The menu path is a string that is used to identify the menu path.
 * It is resolved by checking if the menu id contains a dot, and if it does,
 * it is resolved by using the `resolveDottedPath` function.
 *
 * @param menuId - The menu id
 * @returns The resolved menu path
 */
function resolveMenuPath(menuId: string): string {
  return menuId.includes('.')
    ? resolveDottedPath(menuId)
    : ''
}
