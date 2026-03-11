import React from 'react';
import { Link } from 'react-router-dom';
import { allPosts } from '../data/index';

export default function Basketball() {
  const posts = allPosts.filter(p => p.category === "Basketball");

  return (
    <div className="basketball-page">
      <div style={{ padding: '20px 0', marginBottom: '30px', borderBottom: '2px dashed var(--color-orange)' }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>Baksetball</h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          Sometimes I like to write stuff without having to pitch it. 
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {posts.map(post => {
          // TECHNICAL FIX: Handles both the Transformer array format and plain strings
          let preview = "";
          if (post.body && Array.isArray(post.body) && post.body.length > 0) {
            preview = post.body[0].text;
          } else if (post.content) {
            preview = post.content.split('\n')[0];
          }

          return (
            <div key={post.slug} className="content-card">
              <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-pink-hot)', margin: '0 0 10px 0' }}>{post.title}</h3>
              </Link>
              <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '15px' }}>{post.date}</p>
              
              <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
                {preview || "Invisible Ink."}
              </p>
              
              <Link to={`/post/${post.slug}`} style={{ display: 'inline-block', marginTop: '15px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-orange)' }}>
                Read more...
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}