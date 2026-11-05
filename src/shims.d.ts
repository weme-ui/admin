import 'vue-router'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'vue-router' {
  interface RouteMeta {
    id?: string
    module?: string
    name?: string
    description?: string
    icon?: string
    activeIcon?: string
    isLayout?: boolean
  }
}

declare global {
  interface ImportMetaEnv {
    VITE_APP_NAME: string
    VITE_APP_STATE: string
    VITE_ADMIN_URL: string
    VITE_ADMIN_PORT: number
  }
}

export {}
