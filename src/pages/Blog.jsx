import React from 'react';
import { Link } from 'react-router-dom';
import { allPosts } from '../data/index'; // Adjust path if your data is elsewhere

export default function Blog({ category, title, description }) {
  // Filter posts to only show the ones for this specific page
  const filteredPosts = allPosts.filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="blog-page">
      {/* PAGE HEADER */}
      <div style={{ 
        padding: '20px 0', 
        marginBottom: '40px', 
        borderBottom: '2px dashed var(--color-orange)' 
      }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          {title}
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          {description}
        </p>
      </div>

      {/* POST LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link to={`/post/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="content-card" style={{ maxWidth: 'none', transition: '0.2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', color: 'var(--color-purple-retro)' }}>
                      {post.title}
                    </h3>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold', 
                    color: 'var(--color-pink-hot)',
                    whiteSpace: 'nowrap',
                    marginLeft: '20px'
                  }}>
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="content-card">
            <p>No transmissions found in this sector yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}