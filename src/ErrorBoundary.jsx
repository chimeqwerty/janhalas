import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          fontFamily: 'system-ui',
          maxWidth: '40rem',
          margin: '2rem auto',
        }}>
          <h1 style={{ fontSize: '1.25rem' }}>Something went wrong</h1>
          <p style={{ color: '#666' }}>{this.state.error?.message ?? 'Unknown error'}</p>
        </div>
      )
    }
    return this.props.children
  }
}
