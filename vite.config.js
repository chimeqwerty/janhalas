import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Production base: set BASE_PATH in CI — /repo/ for project pages, / for user/org site repo. */
function productionBase() {
  const raw = process.env.BASE_PATH?.trim()
  if (!raw) return './'
  if (raw === '/') return '/'
  const withLeading = raw.startsWith('/') ? raw : `/${raw}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

// Dev: '/'. Production: BASE_PATH when set (GitHub Actions), else './' for local preview.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : productionBase(),
}))
