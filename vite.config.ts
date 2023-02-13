import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5674,
    watch: {
      usePolling: true,
    },
    host: true, // for Docker Container port mapping
    strictPort: true
  },
  preview: {
    port: 5150
  },
  plugins: [react()],
})
