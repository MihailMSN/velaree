import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/velaree/',  // Critical for GitHub Pages subpath
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
