import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // REPO_ADI: GitHub repo adın
  plugins: [vue(), tailwindcss()],
})