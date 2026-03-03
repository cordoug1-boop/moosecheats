import React from 'react';
import { Link } from 'react-router-dom';

function Cancel() {
  return (
    <div style={{
      backgroundColor: '#111',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#222',
        padding: '60px 40px',
        borderRadius: '10px',
        maxWidth: '600px',
        border: '2px solid #ff5252'
      }}>
        <div style={{
          fontSize: '80px',
          marginBottom: '20px'
        }}>
          ✕
        </div>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '10px',
          color: '#ff5252'
        }}>
          Payment Cancelled
        </h1>
        <p style={{
          fontSize: '18px',
          marginBottom: '30px',
          color: '#aaa'
        }}>
          Your payment has been cancelled. No charges have been made to your account.
        </p>
        
        <div style={{
          background: '#1a1a1a',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#ff5252', marginBottom: '15px' }}>What's Next?</h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0',
            color: '#ccc'
          }}>
            <li style={{ margin: '8px 0', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>•</span>
              You can try again with a different payment method
            </li>
            <li style={{ margin: '8px 0', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>•</span>
              Contact support if you need assistance
            </li>
            <li style={{ margin: '8px 0', paddingLeft: '25px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>•</span>
              Return to browse our products
            </li>
          </ul>
        </div>

        <Link
          to="/"
          style={{
            padding: '12px 30px',
            background: '#ff0000',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-block',
            transition: 'background 0.3s',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.target.style.background = '#cc0000'}
          onMouseLeave={(e) => e.target.style.background = '#ff0000'}
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}

export default Cancel;
