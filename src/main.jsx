import React, { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Catch uncaught errors and display them prominently if React crashes
window.addEventListener('error', (event) => {
  console.error('GLOBAL WINDOW ERROR:', event.error || event.message);
  showErrorOverlay(event.error?.stack || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('UNHANDLED REJECTION:', event.reason);
  showErrorOverlay(event.reason?.stack || event.reason);
});

function showErrorOverlay(msg) {
  let errBox = document.getElementById('debug-error-overlay');
  if (!errBox) {
    errBox = document.createElement('div');
    errBox.id = 'debug-error-overlay';
    errBox.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:999999;background:#990000;color:#fff;padding:20px;font-family:monospace;font-size:14px;white-space:pre-wrap;max-height:50vh;overflow:auto;';
    document.body.appendChild(errBox);
  }
  errBox.textContent = 'Runtime Error Caught:\n' + String(msg);
}

class RootErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
    this.setState({ errorInfo });
    showErrorOverlay(error?.stack || String(error));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '40px auto', background: '#fff', border: '1px solid #fee2e2', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#dc2626', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Application Encountered an Error</h2>
          <pre style={{ background: '#fef2f2', padding: '16px', borderRadius: '8px', color: '#991b1b', fontSize: '13px', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
            {this.state.error?.stack || String(this.state.error)}
          </pre>
          <button
            onClick={() => { window.location.href = '/'; }}
            style={{ marginTop: '20px', padding: '10px 20px', background: '#0062ff', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Go Back Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
