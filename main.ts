import { createTheme, defineOption } from '@acnb/core'

const theme = createTheme({
  log: true,
})

const myPlugin = () => {
  const myPluginOption = defineOption('myPlugin', {
    enable: true,
  })

  // console.log('plugin', enable)
}

// theme.use(myPlugin)
