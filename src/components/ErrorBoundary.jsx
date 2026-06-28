import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    // also log to console so devtools show the stack
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h1>App error</h1>
          <p>We caught an error rendering the app. Details:</p>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#b00020' }}>
            {String(this.state.error)}
          </pre>
          {this.state.errorInfo && (
            <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.errorInfo.componentStack}</pre>
          )}
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
