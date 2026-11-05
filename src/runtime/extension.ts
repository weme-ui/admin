import type { RuntimeCallback, RuntimeContext } from './types'

interface ExtensionHandler {
  (ctx: RuntimeContext): void
}

/**
 * Define an extension
 *
 * @param handler - The extension handler
 * @returns The extension callback
 */
export function defineExtension(handler: ExtensionHandler): RuntimeCallback {
  return (ctx) => {
    try {
      handler(ctx)
    }
    catch (error) {
      console.error(error)
    }
  }
}
