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

export declare const defineOption: <T>(
  userOptionName: string,
  defaultOptions: object
) => (devOptions?: object) => object
