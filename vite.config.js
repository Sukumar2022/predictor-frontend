import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/predictor-frontend/", //open when it is hosted
  plugins: [react()]
})
