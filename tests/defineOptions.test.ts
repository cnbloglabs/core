import { createTheme, defineOptions } from '../src/index'
import { assert, expect, test } from 'vitest'

test('Plugin configuration with string key', () => {
  window.opts = {
    myPlugin: {
      enable: false,
    },
  }
  const p1 = 'myPlugin'
  const p2 = {
    enable: true,
  }
  const output = defineOptions(p1, p2)()
  expect(output).toEqual({ enable: false })
})

test('Plugin configuration with alias key', () => {
  const userConfig = {
    enable: false,
  }
  window.opts = {
    myPluginAlias: userConfig,
  }
  const p1 = ['myPlugin', 'myPluginAlias']
  const p2 = {
    enable: true,
  }
  const output = defineOptions(p1, p2)()
  expect(output).toEqual({ enable: false })
})

test('Plugin configuration with multiple properties', () => {
  const userConfig = {
    enable: false,
    color: 'red',
  }
  window.opts = {
    myPlugin: userConfig,
  }
  const p1 = 'myPlugin'
  const p2 = {
    enable: true,
    color: '',
  }
  const output = defineOptions(p1, p2)()
  expect(output).toEqual(userConfig)
})
