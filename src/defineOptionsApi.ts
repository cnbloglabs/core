import { extend } from './utils/shared'

type MergeOptionsFn = <A extends object, B extends object, C extends object>(
  def?: A,
  user?: B,
  dev?: C
) => A & B & C

type DefineOptionsFn = <F extends object, D extends object, U extends object>(
  userOptionName: string,
  defaultOptions: F
) => (devOptions?: D) => F & U & D

const userConfig = window.opts || {}

const mergeOptions: MergeOptionsFn = (def, user, dev) => {
  const defaultOptions = extend({}, def, dev)
  const options = extend({}, defaultOptions, user)
  return options
}

export const defineOptions: DefineOptionsFn = (
  userOptionName,
  defaultOptions
) => {
  return devOptions => {
    return mergeOptions(defaultOptions, userConfig[userOptionName], devOptions)
  }
}
