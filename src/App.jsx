import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Import the pages
import Home from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Twitch from './pages/Twitch';
import Socials from './pages/Socials';
import Friends from './pages/Friends';
import Library from './pages/Library';
import PostDetail from './pages/PostDetail';
import PostTransformer from './pages/PostTransformer';
import Basketball from './pages/Basketball';
import Personal from './pages/Personal';
import Pamage from './pages/Pamage';
import NotFound from './pages/NotFound'; 
import Recipes from './pages/Recipes';

function App() {
  const [isLive, setIsLive] = useState(false);
  const [showSupport, setShowSupport] = useState(true); 
  const channelName = "montaworldpeace";
  
  const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_TWITCH_CLIENT_SECRET;

  useEffect(() => {
    async function checkStatus() {
      try {
        const tokenResponse = await fetch(
          `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
          { method: 'POST' }
        );
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const streamResponse = await fetch(
          `https://api.twitch.tv/helix/streams?user_login=${channelName}`,
          {
            headers: {
              'Client-ID': CLIENT_ID,
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );
        const streamData = await streamResponse.json();
        setIsLive(streamData.data && streamData.data.length > 0);
      } catch (error) {
        console.error("Twitch API Error:", error);
      }
    }

    checkStatus();
    const interval = setInterval(checkStatus, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
        
        {/* SIDEBAR */}
        <nav className="sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>Monta World Peace</h1>
          <ul style={{ flex: 1 }}>
            <li><Link to="/" className="glow-link" style={{ textDecoration: 'none' }}>My/Your Home :)</Link></li>
            
            <li><Link to="/basketball" style={{ color: 'white', textDecoration: 'none' }}>Baksetball Blog</Link></li>
            <li><Link to="/personal" style={{ color: 'white', textDecoration: 'none' }}>Non-Baksetball Blog</Link></li>
            <li><Link to="/pamage" style={{ color: 'white', textDecoration: 'none' }}>Pamage's Diaries</Link></li>
            <li><Link to="/library" style={{ color: 'white', textDecoration: 'none' }}>Short Stories</Link></li>
            <li><Link to="/music" style={{ color: 'white', textDecoration: 'none' }}>Music I've Made</Link></li>
            <li><Link to="/videos" style={{ color: 'white', textDecoration: 'none' }}>Videos I've Made</Link></li>
            <li><Link to="/recipes" style={{ color: 'white', textDecoration: 'none' }}>Recipes</Link></li>
            
            <li>
              <Link to="/twitch" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Twitch Stream
                <span className={isLive ? "status-light-live" : "status-light-offline"}></span>
              </Link>
            </li>

            <li><Link to="/socials" style={{ color: 'white', textDecoration: 'none' }}>Socials</Link></li>
            
            <li><Link to="/friends" className="glow-link" style={{ textDecoration: 'none' }}>Friends' Corner!!</Link></li>

            <li>
              <a 
                href="https://www.clippings.me/montaworldpeace" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
                >
                Creative Portfolio ↗
              </a>
            </li>

            <li>
              <a 
                href="https://montaworldpeace.proboards.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Message Board ↗
              </a>
            </li>

            <li style={{ display: 'none' }}>
              <a href="https://tech.lgbt/@MontaWorldPeace" rel="me">Mastodon Verify</a>
            </li>
          </ul>

          {/* CONTRIBUTE / SUPPORT SECTION */}
          {showSupport && (
            <div className="support-box" style={{ 
              marginTop: 'auto', 
              paddingTop: '30px',
              borderTop: '1px dashed rgba(255,255,255,0.2)',
              position: 'relative'
            }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid var(--color-orange)'
              }}>
                <button 
                  onClick={() => setShowSupport(false)}
                  style={{
                    position: 'absolute',
                    top: '35px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-orange)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace'
                  }}
                >
                  [X]
                </button>

                <h5 style={{ 
                  margin: '0 0 10px 0', 
                  fontSize: '0.7rem', 
                  letterSpacing: '1px', 
                  color: 'var(--color-orange)',
                  textTransform: 'uppercase',
                  paddingRight: '20px'
                }}>
                  [ SUPPORT WORLD PEACE ]
                </h5>
                
                <p style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '0.7rem', 
                  lineHeight: '1.4', 
                  opacity: 0.7 
                }}>
                  If you believe I add value to the world, consider contributing:
                </p>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://ko-fi.com/montaworldpeace" target="_blank" rel="noopener noreferrer" className="contribute-btn" style={btnStyle}>
                    <span style={{ fontSize: '1.2rem' }}>☕</span> KO-FI
                  </a>
                  <a href="https://www.paypal.me/MontaWorldPeace" target="_blank" rel="noopener noreferrer" className="contribute-btn" style={btnStyle}>
                    <span style={{ fontSize: '1.2rem' }}>💸</span> PAYPAL
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* DYNAMIC MAIN CONTENT */}
        <main className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/pamage" element={<Pamage />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/twitch" element={<Twitch isLive={isLive} />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/library" element={<Library />} />
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/transformer" element={<PostTransformer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const btnStyle = {
  flex: 1,
  textAlign: 'center',
  padding: '10px 0',
  background: 'transparent',
  border: '1px solid var(--color-pink-hot)',
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px'
};

export default App;