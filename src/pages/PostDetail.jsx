import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allPosts } from '../data/index';       
import { libraryData } from '../data/libraryData'; 

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Find the post
  const post = allPosts.find(p => p.slug === slug) || libraryData.find(s => s.slug === slug);

  // 2. Determine return path based on category
  const getReturnPath = () => {
    if (!post) return "/";
    if (post.category === "Basketball") return "/basketball";
    if (post.category === "Personal") return "/personal";
    if (post.category === "Pamage") return "/pamage";
    if (post.category === "Recipes") return "/recipes";
    return "/library";
  };

  // 3. Scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalHeight = docHeight - winHeight;
      
      if (totalHeight <= 0) {
        setScrollProgress(100);
        return;
      }

      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, post]); 

  if (!post) {
    return (
      <div className="content-card">
        <h2>404: Transmission Lost</h2>
        <button onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  const displayBody = post.body;

  return (
    <div className="post-detail-wrapper">
      {/* STICKY PROGRESS BAR */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.1)',
        zIndex: 1000
      }}>
        <div style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'var(--color-pink-hot)',
          transition: 'width 0.1s ease-out'
        }} />
      </div>

      <button 
        onClick={() => navigate(-1)} 
        style={{ background: 'none', border: 'none', color: 'var(--color-purple-retro)', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px' }}
      >
        ← BACK
      </button>

      <article className="content-card" style={{ maxWidth: '1000px', position: 'relative' }}>
        <header style={{ marginBottom: '30px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '20px' }}>
          <span style={{ color: 'var(--color-pink-hot)', fontSize: '0.8rem', fontWeight: 'bold' }}>
            {post.category || "ARCHIVE"} // {post.date || post.year}
          </span>
          <h1 style={{ margin: '10px 0', color: 'var(--color-purple-retro)', fontSize: '2.5rem' }}>
            {post.title}
          </h1>
          {post.tagline && (
            <p style={{ fontStyle: 'italic', opacity: 0.7, marginTop: '5px' }}>"{post.tagline}"</p>
          )}
        </header>

        <section className="post-body">
          {Array.isArray(displayBody) ? (
            displayBody.map((seg, index) => (
              <div key={index} className="post-segment">
                <div className="main-text">
                  <p style={{ lineHeight: '1.8', fontSize: '1.1rem', margin: '0 0 1.5rem 0' }}>
                    {/* AUTO-LINK LOGIC HERE */}
                    {typeof seg.text === 'string' && seg.text.startsWith('http') ? (
                      <a 
                        href={seg.text} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="post-link" // <--- Updated
                        style={{ wordBreak: 'break-all' }}
                        >
                          {seg.text}
                      </a>
                    ) : (
                      seg.text
                    )}
                  </p>
                </div>
                {seg.note && (
                  <aside className="footnote">
                    {seg.note}
                  </aside>
                )}
              </div>
            ))
          ) : (
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              {typeof displayBody === 'string' ? displayBody : "Data format error."}
            </p>
          )}
        </section>

        <footer style={{ 
          marginTop: '60px', 
          paddingTop: '20px', 
          borderTop: '2px dashed var(--color-orange)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <p style={{ fontStyle: 'italic', opacity: 0.7, margin: 0 }}>[ THAT'S_IT ]</p>
          </div>
          
          <Link 
            to={getReturnPath()} 
            className="back-to-blog-link"
            style={{ 
              color: 'var(--color-orange)', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              border: '1px solid var(--color-orange)',
              padding: '8px 15px',
              borderRadius: '4px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-orange)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.color = 'var(--color-orange)';
            }}
          >
            Return to {post.category || "Library"} index →
          </Link>
        </footer>
      </article>
    </div>
  );
}