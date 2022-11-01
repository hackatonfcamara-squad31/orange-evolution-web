import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    alias: {
      styles: '/src/styles',
      components: '/src/components',
      '@': '/src'
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/public/**',
      '**/src/**/__tests__/**',
      '**/src/**/__mocks__/**',
      '**/src/**/__fixtures__/**',
      '**/src/**/__helpers__/**',
      '**/src/**/__stories__/**',
      '**/src/**/__snapshots__/**'
    ]
  }
})
