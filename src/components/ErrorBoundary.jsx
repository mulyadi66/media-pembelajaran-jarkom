import { Component } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg)', padding: 20, fontFamily: 'Inter, sans-serif'
        }}>
          <div style={{
            background: 'white', borderRadius: 16, padding: 40, textAlign: 'center',
            maxWidth: 500, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%', background: '#fef2f2',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <AlertTriangle size={32} color="#ef4444" />
            </div>
            <h2 style={{ marginBottom: 8, color: '#1e293b' }}>Ups! Ada Kesalahan</h2>
            <p style={{ color: '#64748b', marginBottom: 24, fontSize: '0.9rem' }}>
              Terjadi error yang tidak terduga. Silakan muat ulang halaman.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 24px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color: 'white', border: 'none', borderRadius: 10, cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                display: 'inline-flex', alignItems: 'center', gap: 8
              }}
            >
              <RefreshCcw size={16} /> Muat Ulang
            </button>
            <details style={{ marginTop: 16, textAlign: 'left' }}>
              <summary style={{ cursor: 'pointer', color: '#94a3b8', fontSize: '0.8rem' }}>
                Detail Error
              </summary>
              <pre style={{
                marginTop: 8, padding: 12, background: '#f8fafc', borderRadius: 8,
                fontSize: '0.75rem', color: '#ef4444', overflow: 'auto', maxHeight: 200
              }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
