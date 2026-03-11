import React from 'react';
import { videoList } from '../data/videoList';

export default function Videos() {
  const lightPurple = '#9D50BB';

  return (
    <div className="videos-page-wrapper">
      {/* HEADER SECTION - Matches Home & Socials */}
      <div style={{ 
        padding: '20px 0', 
        marginBottom: '30px', 
        borderBottom: '2px dashed var(--color-orange)' 
      }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          Video Archives
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          Archives of videos. Videos presented and collated in an archival fashion. Incredible archives, mediocre videos. All here. For you.
        </p>
      </div>

      {/* VIDEO GRID */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        {videoList.map((video) => (
          <div key={video.id} className="content-card video-card" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: `2px solid ${lightPurple}`,
            borderRadius: '12px',
            overflow: 'hidden',
            maxWidth: 'none',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* RESPONSIVE YOUTUBE EMBED */}
            <div style={{ 
              position: 'relative', 
              paddingBottom: '56.25%', // 16:9 Aspect Ratio
              height: 0, 
              overflow: 'hidden',
              backgroundColor: '#000'
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* VIDEO INFO */}
            <div style={{ padding: '20px', flexGrow: 1 }}>
              <h3 style={{ margin: '0', color: 'var(--color-purple-retro)', fontSize: '1.2rem' }}>
                {video.title}
              </h3>
              <p style={{ margin: '10px 0 0 0', fontSize: '0.9rem', lineHeight: '1.4', opacity: 0.8 }}>
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}