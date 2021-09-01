import { prettyLog } from './utils/helpers'
import { __DEV__ } from './constants/env'
import { getThemeOptions } from 'options/extra'
import { logs } from './constants/logs'

function setDevOptions() {
  if (__DEV__) {
    window.opts = {}
  }
}

function hideLoading() {
  const loading = $('#loading')
  if (loading.length) {
    loading.fadeOut(300)
  }
}

function printInfo(themeOptions) {
  const { log } = getThemeOptions(themeOptions)
  if (!log) return
  if (__DEV__) return
  for (const { str, color } of logs) {
    prettyLog(str, color)
  }
}

export default options => {
  setDevOptions()
  hideLoading()
  printInfo(options)
}
