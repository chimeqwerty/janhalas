import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: use repo name as base if deploying to project pages.
// In dev we use '/' so the app works at http://localhost:5173/
export default defineConfig({
  plugins: [react()],
  base: '/janhalas/',
}) 
