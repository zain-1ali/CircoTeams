import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // preview: {
  //   port: 8080
  // },
  plugins: [react()],
})
