import type { App } from 'vue'
import type { RuntimeContext } from '../types'
import { setupDevtoolsPlugin } from '@vue/devtools-api'
import packageJson from '../../../package.json' with { type: 'json' }

const PLUGIN_ID = 'weme-ui-admin'
const PLUGIN_NAME = 'Weme UI Admin'
const PLUGIN_LOGO =
  'https://raw.githubusercontent.com/moujinet/assets/refs/heads/main/weme-ui/svg/circle-48.svg'

/**
 * Register the Vue DevTools plugin
 *
 * @param app - The Vue application instance
 */
export function registerDevToolsPlugin(app: App, ctx: RuntimeContext) {
  const componentStateTypes: string[] = []

  setupDevtoolsPlugin(
    {
      id: PLUGIN_ID,
      label: PLUGIN_NAME,
      logo: PLUGIN_LOGO,
      packageName: packageJson.name,
      homepage: packageJson.homepage,
      app,
      componentStateTypes,
    },
    (api) => {
      if (typeof api.now !== 'function') {
        // eslint-disable-next-line no-console
        console.debug(
          'You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.',
        )
      }

      api.addInspector({
        id: PLUGIN_ID,
        label: PLUGIN_NAME,
        icon: 'storage',
        treeFilterPlaceholder: 'Search modules',
      })

      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === PLUGIN_ID) {
          payload.rootNodes = ctx.modules.value.map((module) => ({
            id: module.id,
            label: module.name,
          }))
        }
      })
    },
  )
}
