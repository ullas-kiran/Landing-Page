import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


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
  plugins: [react(),tailwindcss()],
})
