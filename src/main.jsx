import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
if (root) {
  try {
    createRoot(root).render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    )
  } catch (err) {
    root.innerHTML = `<p style="padding: 2rem; font-family: system-ui;">Failed to load: ${err?.message ?? err}</p>`
  }
}
