import React from 'react';
import { Link } from 'react-router-dom';
import { allPosts } from '../data/index'; // This pulls from your centralized data controller

export default function Pamage() {
  // Filter for just Pamage posts
  const posts = allPosts.filter(p => p.category === "Pamage");

  return (
    <div className="pamage-page">
      {/* HEADER SECTION */}
      <div style={{ padding: '20px 0', marginBottom: '30px', borderBottom: '2px dashed var(--color-orange)' }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          Pamage's Diaries
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          You weren't invited here. (Ongoing first person fiction of Briggy's and my quest to get a new character to the highest level in Retail WoW without me once causing any Damage to an enemy or player.)
        </p>
      </div>

      {/* POSTS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {posts.length > 0 ? (
          posts.map(post => {
            // TECHNICAL FIX: 
            // Since 'body' is an array of objects, we grab the 'text' from the first index [0].
            const preview = (post.body && post.body.length > 0) 
              ? post.body[0].text 
              : "Invisible Ink.";

            return (
              <div key={post.slug} className="content-card">
                <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'var(--color-pink-hot)', margin: '0 0 10px 0' }}>
                    {post.title}
                  </h3>
                </Link>
                <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '15px' }}>
                  {post.date}
                </p>
                
                {/* THE PREVIEW */}
                <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
                  {preview}
                </p>
                
                <Link 
                  to={`/post/${post.slug}`} 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '15px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold', 
                    color: 'var(--color-orange)' 
                  }}
                >
                  Read more...
                </Link>
              </div>
            );
          })
        ) : (
          <p>No diaries found yet. Check back after the next quest.</p>
        )}
      </div>
    </div>
  );
}