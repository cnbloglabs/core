import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: './src/index.ts',
      name: 'acnb',
      fileName: 'acnb',
    },
  },
})
