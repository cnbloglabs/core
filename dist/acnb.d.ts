export interface Theme {
  version: string
  _context: ThemeContext
  config: ThemeConfig
  use(plugin: Plugin, ...options: any[]): this
}

export interface ThemeConfig {
  globalProperties: Record<string, any>
}

export interface ThemeContext {
  theme: Theme
  config: ThemeConfig
}

export type PluginFunction<T> = (Theme: Theme, options?: T) => void

export interface PluginObject<T> {
  install: PluginFunction<T>
  [key: string]: any
}

export interface CreateThemeConfig {
  log: boolean
}

export declare const createTheme: (options?: CreateThemeConfig) => Theme

export declare const defineOptions: <
  F extends object,
  D extends object,
  U extends object
>(
  userOptionName: string,
  defaultOptions: F
) => (devOptions: D) => F & U & D
