import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
    },
  },
  plugins: [react()],
})
