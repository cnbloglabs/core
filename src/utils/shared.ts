export const extend = Object.assign
export const isArray = Array.isArray

export function isFunction(x: unknown): x is Function {
  return typeof x === 'function'
}

export function isString(x: unknown): x is String {
  return typeof x === 'string'
}
