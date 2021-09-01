import { createTheme } from './src/index'

const theme = createTheme({
  log: true,
})

const myPlugin = () => {
  console.log('plugin')
}

theme.use(myPlugin)
