import React from 'react';
import { musicList } from '../data/musicList';

export default function Music() {
  return (
    <div className="content-card" style={{ maxWidth: 'none' }}>
      <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2rem' }}>Music Repository</h2>
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>
        Tracks are creative commons and shit I guess. Feel free to use them.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {musicList.map((track) => (
          <div key={track.id} style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.3)' 
          }}>
            <h3 style={{ marginTop: 0, color: 'var(--color-purple-retro)' }}>{track.title}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>{track.description}</p>
            <iframe 
              width="100%" 
              height="166" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.soundcloudUrl)}&color=%23FFB6C1&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}