import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'build'
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**',
    ],
    // keep both junit + html reporters
    reporters: ['default', 'junit', 'html'],
    outputFile: {
      junit: './reports/TEST-results.xml',
      html: './reports/vitest-index.html'   // Vitest's own HTML
    }
  }
})
