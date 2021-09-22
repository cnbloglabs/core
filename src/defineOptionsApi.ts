import { extend } from './utils/shared'

const userConfig = window.opts || {}

function mergeOptions(def, user, dev = {}) {
  const defaultOptions = extend({}, def, dev)
  const options = extend({}, defaultOptions, user)
  return options
}

export function defineOption(userOptionName: string, defaultOptions: object) {
  return function (devOptions?: object) {
    return mergeOptions(defaultOptions, userConfig[userOptionName], devOptions)
  }
}
