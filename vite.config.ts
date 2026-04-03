import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap', '@gsap/react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap') || id.includes('node_modules/@gsap')) {
            return 'vendor-animation'
          }
          if (id.includes('node_modules/react-markdown') || id.includes('node_modules/remark-gfm')) {
            return 'vendor-markdown'
          }
        },
      },
    },
  },
})
