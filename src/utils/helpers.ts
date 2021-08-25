/**
 * Console print function supporting color
 * @param {string} str - String to print
 * @param {string} color - Print displayed colors
 */
export function prettyLog(str: string, color: string = '#ffb3cc'): void {
  console.log(`%c  ${str}`, `color: ${color}; font-weight: bold;`)
}
