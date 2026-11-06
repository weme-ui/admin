import type { App } from 'vue'
import type { RuntimeContext } from '../types'
import { setupDevtoolsPlugin } from '@vue/devtools-api'

const INSPECTOR_ID = 'weme-ui-admin'
const componentStateTypes: string[] = []

/**
 * Register the Vue DevTools plugin
 *
 * @param app - The Vue application instance
 */
export function registerDevToolsPlugin(app: App, ctx: RuntimeContext) {
  setupDevtoolsPlugin({
    id: 'weme-ui-admin',
    label: 'Weme UI Admin',
    logo: 'https://raw.githubusercontent.com/moujinet/assets/refs/heads/main/weme-ui/svg/circle-48.svg',
    packageName: '@weme-ui/admin',
    homepage: 'https://github.com/weme-ui/admin',
    app,
    componentStateTypes,
  }, (api) => {
    if (typeof api.now !== 'function') {
      // eslint-disable-next-line no-console
      console.debug('You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.')
    }

    api.addInspector({
      id: INSPECTOR_ID,
      label: 'Weme UI Admin',
      icon: 'storage',
      treeFilterPlaceholder: 'Search modules',
    })

    api.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        payload.rootNodes = ctx.modules.value.map(module => ({
          id: module.id,
          label: module.name,
        }))
      }
    })
  })
}
