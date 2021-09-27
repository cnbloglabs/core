import { createTheme, defineOptions } from '@acnb/core'

const theme = createTheme()

const myPlugin = () => {
  const myPluginOption = defineOptions('myPlugin', {
    enable: true,
  })
}

theme.use(myPlugin)
