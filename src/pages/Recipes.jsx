import React from 'react';
import { Link } from 'react-router-dom';
import { allPosts } from '../data/index'; 

export default function Recipes() {
  const recipePosts = allPosts.filter(p => p.category === "Recipes");

  return (
    <div className="recipes-container">
      <h1 style={{ color: 'var(--color-purple-retro)', marginBottom: '30px' }}>Coming Soon</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {recipePosts.map(post => (
          <Link key={post.slug} to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div className="content-card">
              {/* If you add an image field to your data later, it goes here */}
              <h3 style={{ color: 'var(--color-pink-hot)', margin: '0 0 10px 0' }}>{post.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#444', margin: 0 }}>{post.tagline}</p>
              <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}