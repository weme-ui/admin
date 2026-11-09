import 'vue-router'

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
    VITE_APP_URL: string
    VITE_APP_PORT: number
  }
}
