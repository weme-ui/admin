import type { Ref } from 'vue'
import type {
  Module,
  ModuleHandler,
  ModuleMenuMeta,
  RuntimeCallback,
  RuntimeContext,
  RuntimeHooks,
} from '../types'
import type { Hook } from './hook'

// ============================================================================
// Module
// ============================================================================

/**
 * Load all module configs
 *
 * The modules are loaded from the `~/modules` directory.
 *
 * @param modules - The modules
 * @param metas - The metas
 * @param hooks - The hooks
 */
export function loadModules(
  modules: Ref<Module[]>,
  metas: Ref<ModuleMenuMeta[]>,
  hooks: Hook<RuntimeHooks>,
) {
  const configs = import.meta.glob<ModuleHandler>('~/modules/**/module.config.ts', {
    eager: true,
    import: 'default',
  })

  for (const module of Object.values(configs)) {
    module(modules, metas, hooks)
  }
}

// ============================================================================
// Middleware
// ============================================================================

export function loadMiddlewares(ctx: RuntimeContext) {
  const middlewares = import.meta.glob<RuntimeCallback>('~/middlewares/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const middleware of Object.values(middlewares)) {
    middleware(ctx)
  }
}

// ============================================================================
// Extension
// ============================================================================

/**
 * Load all extensions
 *
 * @param ctx - The runtime context
 */
export function loadExtensions(ctx: RuntimeContext) {
  const extensions = import.meta.glob<RuntimeCallback>('~/extensions/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const extension of Object.values(extensions)) {
    extension(ctx)
  }
}
