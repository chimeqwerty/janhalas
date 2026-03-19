import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: absolute '/' for localhost. Production: relative './' so JS/CSS load whether the site
// is at https://user.github.io/repo/ or at the domain root (user.github.io repo / custom domain).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : './',
}))
