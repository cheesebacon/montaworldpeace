import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh', 
      fontFamily: 'monospace',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Self-contained Glitch Styles */}
      <style>
        {`
          /* Subtle background shake for the "haunted" look */
          @keyframes subtle-float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-2px, 2px); }
            100% { transform: translate(0, 0); }
          }

          /* The violent hover shake */
          @keyframes violent-glitch {
            0% { transform: translate(0); }
            10% { transform: translate(-8px, -8px); text-shadow: 4px 0 var(--color-pink-hot), -4px 0 var(--color-purple-retro); }
            20% { transform: translate(8px, 8px); }
            30% { transform: translate(-8px, 8px); }
            40% { transform: translate(8px, -8px); text-shadow: -4px 0 var(--color-pink-hot), 4px 0 var(--color-purple-retro); }
            50% { transform: translate(-10px, 0); }
            60% { transform: translate(10px, 2px); }
            70% { transform: translate(-8px, -8px); }
            80% { transform: translate(8px, 8px); }
            90% { transform: translate(-2px, -10px); }
            100% { transform: translate(0); }
          }
          
          .glitch-text:hover {
            animation: violent-glitch 0.1s infinite !important;
            cursor: pointer;
          }
        `}
      </style>

      {/* The Giant House Emoji - NOW THE ONLY LINK */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ 
          fontSize: '12rem', 
          marginBottom: '40px',
          animation: 'subtle-float 2s infinite ease-in-out',
          userSelect: 'none',
          display: 'inline-block'
        }} className="glitch-text">
          🏚️
        </div>
      </Link>

      {/* The Blink-182 Lyrics - NO LONGER A LINK */}
      <div style={{ maxWidth: '400px', textAlign: 'center' }}>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.5', 
          margin: 0, 
          fontStyle: 'italic',
          letterSpacing: '0.5px',
          color: 'var(--color-pink-hot)'
        }}>
          Please take me home.<br/>
          Too late. It's gone.<br/>
          I bet you're sad.<br/>
          This is the best time we ever had.
        </p>
        <span style={{ fontSize: '0.7rem', opacity: 0.3, display: 'block', marginTop: '15px', color: 'var(--color-pink-hot)' }}>
          [ Get out ]
        </span>
      </div>
    </div>
  );
}