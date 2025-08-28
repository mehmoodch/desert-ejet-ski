import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/desert-splash-design/',
  plugins: [react()],
  build: { sourcemap: true },            // ← add this
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
