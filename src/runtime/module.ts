import type { Module, ModuleDefinition, ModuleHandler, ModuleMenu } from './types'
import { defineMenu, getDeepestMenu, updateMensMeta } from './internal/menu'
import { sortByAsc } from './internal/utils'

const DEFAULT_MODULE_ICON = 'ri:apps-line'
const DEFAULT_MODULE_ACTIVE_ICON = 'ri:apps-fill'

/**
 * The modules injection key is used to inject the modules into the application.
 */
export const MODULES_INJECTION_KEY = Symbol('weme.runtime.modules')

/**
 * Define a module
 *
 * The module is a collection of components, pages, and other resources that are
 * used to build the application.
 *
 * @param id - The module id
 * @param definition - The module definition
 * @returns The module handler
 */
export function defineModule(id: string, definition: ModuleDefinition): ModuleHandler {
  if (!definition.name) {
    throw new Error('Module name is required')
  }

  return (modules, metas, hooks) => {
    if (modules.value.some(m => m.id === id)) {
      throw new Error(`Module ${id} already defined`)
    }

    const menus: ModuleMenu[] = []
    const definitionMenus = (definition.menus || []).sort(sortByAsc)

    definitionMenus.forEach((menu) => {
      menus.push(defineMenu(id, menu, id))
    })

    const defaultMenuPath = definitionMenus.length > 0
      ? getDeepestMenu(menus[0]).path
      : definition.path

    const newModule: Module = {
      id,
      name: definition.name,
      description: definition.description,
      tooltip: definition.tooltip || definition.name,
      icon: definition.icon || DEFAULT_MODULE_ICON,
      activeIcon: definition.activeIcon || definition.icon === DEFAULT_MODULE_ICON
        ? DEFAULT_MODULE_ACTIVE_ICON
        : definition.icon,
      path: defaultMenuPath || '',
      sort: definition.sort || modules.value.length + 1,
      hidden: definition.hidden === undefined
        ? false
        : definition.hidden,
      menus: menus.length > 0
        ? menus
        : undefined,
    }

    modules.value.push(newModule)

    // Define the module meta
    metas.value.push({
      id: newModule.id,
      module: newModule.id,
      name: newModule.name,
      description: newModule.description,
      icon: newModule.icon,
    })

    // Update the module menu metas
    updateMensMeta(metas, menus)

    // Call the module setup function
    definition.setup?.(newModule)

    // Call the module ready hook
    hooks.callHook('module:ready', newModule)
  }
}

interface UseModulesReturn {
  store: Ref<Module[]>
  matched: ComputedRef<Module | undefined>
  findModule: (...moduleIds: string[]) => Module[]
}

/**
 * Use the modules composable
 *
 * @example
 * ```ts
 * const { store, matched, findModule } = useModules()
 *
 * // Get the module store
 * console.log(store.value)
 *
 * // Get the matched module
 * console.log(matched.value)
 *
 * // Find modules by id
 * console.log(findModule('module-id'))
 * console.log(findModule('module-id-1', 'module-id-2'))
 * ```
 */
export function useModules(): UseModulesReturn {
  const route = useRoute()

  const leading = computed(() => route.matched[0])
  const store = inject<Ref<Module[]>>(MODULES_INJECTION_KEY, ref<Module[]>([]))
  const matched = computed(
    () => store.value.find(m => leading.value.path.startsWith(`/${m.id}`)),
  )

  function findModule(...moduleIds: string[]): Module[] {
    return store.value.filter(
      m => moduleIds.includes(m.id),
    ).sort(sortByAsc)
  }

  return {
    store,
    matched,
    findModule,
  }
}
