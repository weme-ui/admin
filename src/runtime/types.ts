import type { VueHeadClient } from '@unhead/vue/client'
import type { Pinia } from 'pinia'
import type { App, Ref } from 'vue'
import type { Router } from 'vue-router'
import type { Hook } from './internal/hook'

// ============================================================================
// Runtime
// ============================================================================

export interface RuntimeContext {
  app: App<Element>
  router: Router
  head: VueHeadClient
  pinia: Pinia
  hooks: Hook<RuntimeHooks>
  modules: Ref<Module[]>
  meta: Ref<ModuleMenuMeta[]>
}

export interface RuntimeHooks {
  'module:ready': (mod: Module) => void
  'module:mounted': (mod: Module) => void
  'runtime:ready': (ctx: RuntimeContext) => void
}

export interface RuntimeCallback {
  (ctx: RuntimeContext): void | Promise<void>
}

// ============================================================================
// Module
// ============================================================================

export interface Module {
  id: string
  name: string
  description?: string
  tooltip?: string
  icon: string
  activeIcon?: string
  path: string
  sort: number
  hidden: boolean
  menus?: ModuleMenu[]
}

export type ModuleDefinition = Partial<Omit<Module, 'name' | 'menus'>> & {
  name: string
  menus?: ModuleMenuDefinition[]
  setup?: (module: Module) => void
}

export interface ModuleHandler {
  (modules: Ref<Module[]>, metas: Ref<ModuleMenuMeta[]>, hooks: Hook<RuntimeHooks>): void
}

// ============================================================================
// Menu
// ============================================================================

export type ModuleMenuType = 'group' | 'index' | 'page' | 'action'

interface ModuleMenuFields {
  type: ModuleMenuType
  module: string
  description?: string
  tooltip?: string
  path?: string
  icon?: string
  activeIcon?: string
  sort: number
  hidden: boolean
}

export interface ModuleMenu extends ModuleMenuFields {
  id: string
  label: string
  children?: ModuleMenu[]
}

export type ModuleMenuDefinition = Partial<ModuleMenuFields> & {
  id: string
  label: string
  children?: ModuleMenuDefinition[]
}

// ============================================================================
// Meta
// ============================================================================

export interface ModuleMenuMeta {
  id: string
  module: string
  name: string
  description?: string
  icon?: string
}
