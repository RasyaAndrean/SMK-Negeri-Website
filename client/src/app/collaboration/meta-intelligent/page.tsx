'use client';

import MetaIntelligentCollaboration from '../../components/MetaIntelligentCollaboration';

export default function MetaIntelligentCollaborationPage() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '15px',
            }}
          >
            🌌 Meta-Intelligent Real-time Collaboration
          </h1>
          <p
            style={{ fontSize: '1.2rem', marginBottom: '20px', opacity: '0.9' }}
          >
            Quantum-conscious collaboration with neuro-linguistic programming
            and collective intelligence integration
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/docs/collaboration/meta-intelligent"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 25px',
                border: '2px solid white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
            >
              📘 View Documentation
            </a>
            <a
              href="/collaboration/ultimate"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 25px',
                border: '2px solid white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
            >
              ← Back to Ultimate Collaboration
            </a>
          </div>
        </div>
        <MetaIntelligentCollaboration />
      </div>
    </div>
  );
}
