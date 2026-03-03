import React from 'react';
import { Link } from 'react-router-dom';
// Import your specific story files
import { beachStory } from '../data/beachStory';
import { detachment } from '../data/detachment';
import { recorded } from '../data/recorded';

export default function Library() {
  // Simple list using the objects directly
  const storyList = [beachStory, detachment, recorded];

  return (
    <div className="content-card">
      <h2 style={{ borderBottom: '2px solid var(--color-orange)', color: 'var(--color-purple-retro)' }}>
        The Library
      </h2>
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>
        Completed stories and long-form prose.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {storyList.map((story) => (
          <div key={story.slug} style={{ 
            border: '2px solid var(--color-purple-retro)', 
            padding: '25px', 
            borderRadius: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ color: 'var(--color-purple-retro)', marginTop: 0, marginBottom: '5px' }}>
                {story.title}
              </h3>
              
              <p style={{ 
                fontStyle: 'italic', 
                color: 'var(--color-orange)', 
                fontSize: '0.85rem', 
                marginBottom: '10px' 
              }}>
                {story.tagline}
              </p>

              <p style={{ fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.4' }}>
                {story.description}
              </p>
            </div>
            
            {/* REAL NAVIGATION LINK */}
            <Link 
              to={`/post/${story.slug}`} 
              style={{ 
                background: 'var(--color-purple-retro)', 
                color: 'white', 
                padding: '12px', 
                textAlign: 'center',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                display: 'block'
              }}
            >
              Read Story
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}