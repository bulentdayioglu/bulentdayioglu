import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/bulentdayioglu/', // REPO_ADI: GitHub repo adın
  plugins: [vue(), tailwindcss()],
})