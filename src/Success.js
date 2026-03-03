import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
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
        border: '2px solid #00c853'
      }}>
        <div style={{
          fontSize: '80px',
          marginBottom: '20px'
        }}>
          ✓
        </div>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '10px',
          color: '#00c853'
        }}>
          Payment Successful!
        </h1>
        <p style={{
          fontSize: '18px',
          marginBottom: '30px',
          color: '#aaa'
        }}>
          Thank you for your purchase. Your order has been confirmed and you will receive access to your product shortly.
        </p>
        
        <div style={{
          background: '#1a1a1a',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#00c853', marginBottom: '10px' }}>Order Details:</h3>
          <p style={{ margin: '8px 0', color: '#ccc' }}>
            <strong>Status:</strong> <span style={{ color: '#00c853' }}>Confirmed</span>
          </p>
          <p style={{ margin: '8px 0', color: '#ccc' }}>
            <strong>Notification:</strong> Check your email for download links and instructions
          </p>
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

export default Success;
