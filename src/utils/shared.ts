export const extend = Object.assign
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'
