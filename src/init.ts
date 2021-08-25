import { prettyLog } from './utils/helpers'
import { __DEV__ } from './constants/env'
import { getThemeOptions } from 'options/extra'
import { logs } from './constants/logs'

/**
 * Create a configuration for the development environment.
 */
function setDevOptions() {
  if (__DEV__) {
    window.opts = {}
  }
}

/**
 * Hide loading.
 */
function hideLoading() {
  const loading = $('#loading')
  if (loading.length) {
    loading.fadeOut(300)
  }
}

/**
 * The console prints awescnb information.
 */
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
