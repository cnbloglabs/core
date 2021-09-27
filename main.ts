import { createTheme, defineOptions } from '@acnb/core'

const theme = createTheme({
  log: true,
})

const myPlugin = () => {
  const myPluginOption = defineOptions('myPlugin', {
    enable: true,
  })

  myPluginOption().enable

  // console.log('plugin', enable)
}

// theme.use(myPlugin)
