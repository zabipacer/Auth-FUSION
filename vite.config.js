import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_FIREBASE_APP':JSON.stringify(process.env.VITE_FIREBASE_APP)
  }
})
