import { createTheme, defineOptions } from '../src/index'

console.log('user config:', window.opts)

const myPlugin = () => {
  const usePluginOption = defineOptions(['myPlugin1', 'myPluginAlias'], {
    enable: true,
  })

  console.log('final plugin config:', usePluginOption())
}

const theme = createTheme()

theme.use(myPlugin)
