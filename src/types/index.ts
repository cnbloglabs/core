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

type PluginInstallFunction = (theme: Theme, ...options: any[]) => any

export type Plugin =
  | (PluginInstallFunction & { install?: PluginInstallFunction })
  | {
      install: PluginInstallFunction
    }

export interface CreateThemeConfig {
  log: boolean
}
