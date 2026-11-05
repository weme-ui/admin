export type HookHandler = (...args: any) => Promise<void> | void
export type HookNames<T> = keyof T & string

export interface Hooks { [key: string]: HookHandler }

type InferHandler<T, NameT extends keyof T> = T[NameT] extends HookHandler ? T[NameT] : never

/**
 * Hook class
 *
 * @example
 * const hook = new Hook<{
 *   'foo': (bar: string) => void,
 *   'baz': (qux: number) => void,
 * }>()
 *
 * hook.hook('foo', (bar) => {
 *   console.log(bar)
 * })
 *
 * hook.hook('baz', (qux) => {
 *   console.log(qux)
 * })
 *
 * hook.callHook('foo', 'bar')
 * hook.callHook('baz', 123)
 *
 * console.log(hook._hooks)
 * // {
 * //   foo: [() => { console.log('bar') }],
 * //   baz: [() => { console.log('qux') }],
 * // }
 */
export class Hook<
  HooksT extends Record<string, any> = Record<string, HookHandler>,
  HookNameT extends HookNames<HooksT> = HookNames<HooksT>,
> {
  protected _hooks: { [key: string]: HookHandler[] | undefined } = {}

  constructor() {
    this._hooks = {}
  }

  /**
   * Add a hook
   *
   * @param name - The name of the hook
   * @param fn - The function to call when the hook is called
   * @returns A function to remove the hook
   */
  hook<NameT extends HookNameT>(name: NameT, fn: InferHandler<HooksT, NameT>): () => void {
    if (!name || typeof fn !== 'function') {
      return () => {}
    }

    this._hooks[name] = this._hooks[name] ?? []
    this._hooks[name].push(fn)

    return () => {
      if (fn) {
        this.removeHook(name, fn)
        // @ts-expect-error - free memory
        fn = undefined
      }
    }
  }

  /**
   * Remove a hook
   *
   * @param name - The name of the hook
   * @param fn - The function to remove
   */
  removeHook<NameT extends HookNameT>(name: NameT, fn: InferHandler<HooksT, NameT>): void {
    const hooks = this._hooks[name]

    if (hooks) {
      const index = hooks.indexOf(fn)

      if (index !== -1) {
        hooks.splice(index, 1)
      }

      if (hooks.length === 0) {
        this._hooks[name] = undefined
      }
    }
  }

  /**
   * Call a hook
   *
   * @param name - The name of the hook
   * @param args - The arguments to pass to the hook
   * @returns The result of the hook
   */
  callHook<NameT extends HookNameT>(name: NameT, ...args: Parameters<InferHandler<HooksT, NameT>>): Promise<any> | void {
    const hooks = this._hooks[name]

    if (!hooks || hooks.length === 0) {
      return
    }

    for (const hook of hooks) {
      try {
        const result = hook(...args)

        if (result && typeof (result as any).then === 'function') {
          return Promise.resolve(result)
        }
      }
      catch (error) {
        return Promise.reject(error)
      }
    }
  }
}
