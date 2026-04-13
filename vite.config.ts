import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quest4444444444444444/',
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})
