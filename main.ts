import { createTheme, defineOption } from '@acnb/core'

const theme = createTheme({
  log: true,
})

const myPluginOption = defineOption('myPlugin', {
  enable: true,
})

const myPlugin = () => {
  const { enable, mountNode } = myPluginOption({ mountNode: '' })
  console.log('plugin', enable)
}

theme.use(myPlugin)
