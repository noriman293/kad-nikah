import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './', // penting untuk Netlify supaya path relative
  build: {
    outDir: 'dist', // confirm output folder betul
  },
})
