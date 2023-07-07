import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // Specify the path to your styles entry point
      // This is where Tailwind CSS styles will be imported
      // Make sure to adjust the path if needed
      postcss: {
        plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')]
      }
    }
  }
})
