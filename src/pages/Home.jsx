import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BskyAgent } from '@atproto/api';
import { getLatestByCategory } from '../data/index'; 
import { beachStory } from '../data/beachStory'; 
import { videoList } from '../data/videoList';
import { musicList } from '../data/musicList';

export default function Home() {
  const [bskyPosts, setBskyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const latestHoops = getLatestByCategory('Basketball');
  const latestPersonal = getLatestByCategory('Personal');
  const latestPamage = getLatestByCategory('Pamage');
  const latestVideo = videoList[videoList.length - 1];
  const latestMusic = musicList[musicList.length - 1];

  // Helper function for the timestamp logic
  const getRelativeTime = (dateString) => {
    if (!dateString) return "ARCHIVE";
    const now = new Date();
    const past = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(past.getTime())) return dateString; 

    const diffInMs = now - past;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${diffInDays}d ago`;
  };

  useEffect(() => {
    async function fetchSocials() {
      try {
        const agent = new BskyAgent({ service: 'https://public.api.bsky.app' });
        const bskyRes = await agent.getAuthorFeed({ actor: 'montaworldpeace.bsky.social', limit: 3 });
        if (bskyRes.data.feed.length > 0) {
          setBskyPosts(bskyRes.data.feed);
        }
      } catch (err) {
        console.error("BlueSky fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSocials();
  }, []);

  return (
    <div className="home-container" style={{ maxWidth: '100%' }}>
      
      <style>
        {`
          @keyframes social-glow {
            0% { border-color: rgba(186, 104, 200, 0.2); box-shadow: 0 0 5px rgba(186, 104, 200, 0.1); }
            50% { border-color: var(--color-purple-retro); box-shadow: 0 0 15px rgba(186, 104, 200, 0.3); }
            100% { border-color: rgba(186, 104, 200, 0.2); box-shadow: 0 0 5px rgba(186, 104, 200, 0.1); }
          }
          .glow-box {
            animation: social-glow 10s infinite ease-in-out;
            border: 2px solid var(--color-purple-retro);
          }

          @keyframes glitch-subtle {
            0% { transform: translate(0); }
            25% { transform: translate(-1px, 1px); }
            50% { transform: translate(1px, -1px); }
            75% { transform: translate(-1px, -1px); }
            100% { transform: translate(0); }
          }
          .system-status-container:hover p {
            animation: glitch-subtle 0.2s infinite;
            opacity: 0.9;
          }
          
          .bsky-post-wrapper:hover p {
            color: var(--color-pink-hot);
            transition: color 0.2s ease;
          }

          /* Ensure grid cards are uniform */
          .grid-card-link {
            text-decoration: none;
            color: inherit;
            display: flex;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <div style={{ padding: '20px 0', marginBottom: '20px', borderBottom: '2px dashed var(--color-orange)' }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          Monta World Peace Dot Com
        </h2>
      </div>

      {/* ABOUT & SOCIALS */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        marginBottom: '40px',
        alignItems: 'start'
      }}>
        <section style={{ lineHeight: '1.6' }}>
          <h3 style={{ color: 'var(--color-orange)', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '15px' }}>
            [ Author_Profile ]
          </h3>
          <p style={{ fontSize: '1.1rem', margin: '0 0 15px 0' }}>
          Hiya! I am Mat Rutkowski. I made this. This isn't the thing I really care about though. I just wanted a home to put the stuff I actually care about: creative pursuits, basketball interests that don't fit elsewhere, music, dumb videos, all of that. I'm 39 and have done a lot of shit. Some of it is cool. It needs a place to live.
          </p>
          <p style={{ fontSize: '1.1rem', margin: '0 0 15px 0' }}>
          So that's what I'm doing now. I wanted to make this site look like the sites I really enjoyed while I first discovered the internet in the early 2000s. I guess it's kind of updated. I really tried to research architecture to go completely old-school and make actual frames and shit, but I was talked down from that over and over again.
          </p>
          <p style={{ fontSize: '1.1rem', margin: '0 0 15px 0' }}>
          I guess this isn't bad though. Hopefully this Home page kind of points you to places to go. I am writing this on 3/4/2026. There is very little content up here at this point. I plan to change that, but yeah. If you're reading this in the near future, I completely understand being like 'yeah nah im good' and heading out. So it goes.
          </p>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>
          But I appreciate you if you stay to check out anything. Actually, I love you and now we're married. that's how it works here. ⊙_⊙
          </p>
        </section>

        <section className="glow-box" style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '0.8rem', margin: 0, opacity: 0.5, letterSpacing: '1px' }}>[ LATEST_ACTIVITY ]</h3>
            <a href="https://bsky.app/profile/montaworldpeace.bsky.social" target="_blank" rel="noreferrer" style={{ 
              color: '#0085ff', 
              fontSize: '0.7rem', 
              fontWeight: 'bold', 
              textDecoration: 'none',
              border: '1px solid #0085ff',
              padding: '2px 6px',
              borderRadius: '4px'
            }}>
              @BLUESKY
            </a>
          </div>
          
          {loading ? (
            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Loading transmissions...</p>
          ) : (
            bskyPosts.map((item, index) => {
              const postUri = item.post.uri.split('/').pop();
              const postLink = `https://bsky.app/profile/montaworldpeace.bsky.social/post/${postUri}`;
              const timeAgo = getRelativeTime(item.post.indexedAt);
              
              return (
                <div key={index} className="bsky-post-wrapper" style={{ marginBottom: index === bskyPosts.length - 1 ? 0 : '18px' }}>
                  <a href={postLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p style={{ fontSize: '0.85rem', margin: 0, fontStyle: 'italic', lineHeight: '1.4' }}>
                      "{item.post.record.text}"
                    </p>
                    <span style={{ fontSize: '0.65rem', opacity: 0.4, display: 'block', marginTop: '4px', fontFamily: 'monospace' }}>
                      [{timeAgo}]
                    </span>
                  </a>
                </div>
              );
            })
          )}
        </section>
      </div>

      {/* REVAMPED FULL GRID - Corrected for 6-across layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '15px', 
        marginBottom: '40px' 
      }}>
        
        {/* BASKETBALL CARD */}
        {latestHoops && (
          <Link to={`/post/${latestHoops.slug}`} className="grid-card-link">
            <div className="content-card" style={{ border: '2px solid var(--color-pink-hot)', width: '100%', height: '100%', padding: '15px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--color-pink-hot)', fontWeight: 'bold', fontFamily: 'monospace' }}>
                [ UPDATED: {getRelativeTime(latestHoops.date)} ]
              </span>
              <h4 style={{ color: 'var(--color-pink-hot)', margin: '8px 0 4px 0', fontSize: '0.9rem' }}>NEW Basketball info</h4>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>{latestHoops.title}</p>
            </div>
          </Link>
        )}

        {/* PERSONAL CARD */}
        {latestPersonal && (
          <Link to={`/post/${latestPersonal.slug}`} className="grid-card-link">
            <div className="content-card" style={{ border: '2px solid var(--color-orange)', width: '100%', height: '100%', padding: '15px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--color-orange)', fontWeight: 'bold', fontFamily: 'monospace' }}>
                [ UPDATED: {getRelativeTime(latestPersonal.date)} ]
              </span>
              <h4 style={{ color: 'var(--color-orange)', margin: '8px 0 4px 0', fontSize: '0.9rem' }}>EXTREME Personal Blog</h4>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>{latestPersonal.title}</p>
            </div>
          </Link>
        )}

        {/* PAMAGE CARD */}
        {latestPamage && (
          <Link to={`/post/${latestPamage.slug}`} className="grid-card-link">
            <div className="content-card" style={{ border: '2px solid var(--color-purple-retro)', width: '100%', height: '100%', padding: '15px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--color-purple-retro)', fontWeight: 'bold', fontFamily: 'monospace' }}>
                [ UPDATED: {getRelativeTime(latestPamage.date)} ]
              </span>
              <h4 style={{ color: 'var(--color-purple-retro)', margin: '8px 0 4px 0', fontSize: '0.9rem' }}>NEWEST Pamage Fun</h4>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>{latestPamage.title}</p>
            </div>
          </Link>
        )}

        {/* LIBRARY CARD */}
        <Link to="/library" className="grid-card-link">
          <div className="content-card" style={{ border: '2px solid var(--color-pink-hot)', width: '100%', height: '100%', padding: '15px' }}>
            <span style={{ fontSize: '0.6rem', color: 'var(--color-pink-hot)', fontWeight: 'bold', fontFamily: 'monospace' }}>
              [ STATUS: FEATURED ]
            </span>
            <h4 style={{ color: 'var(--color-pink-hot)', margin: '8px 0 4px 0', fontSize: '0.9rem' }}>FEATURED Short Story</h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>{beachStory.title}</p>
          </div>
        </Link>

        {/* VIDEO CARD */}
        <Link to="/videos" className="grid-card-link">
          <div className="content-card" style={{ border: '2px solid var(--color-orange)', width: '100%', height: '100%', padding: '15px' }}>
            <span style={{ fontSize: '0.6rem', color: 'var(--color-orange)', fontWeight: 'bold', fontFamily: 'monospace' }}>
              [ STATUS: RECENT ]
            </span>
            <h4 style={{ color: 'var(--color-orange)', margin: '8px 0 4px 0', fontSize: '0.9rem' }}>MIND-CARESSING Vids</h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>{latestVideo?.title || "Searching..."}</p>
          </div>
        </Link>

        {/* MUSIC CARD */}
        <Link to="/music" className="grid-card-link">
          <div className="content-card" style={{ border: '2px solid var(--color-purple-retro)', width: '100%', height: '100%', padding: '15px' }}>
            <span style={{ fontSize: '0.6rem', color: 'var(--color-purple-retro)', fontWeight: 'bold', fontFamily: 'monospace' }}>
              [ STATUS: UPLOADED ]
            </span>
            <h4 style={{ color: 'var(--color-purple-retro)', margin: '8px 0 4px 0', fontSize: '0.9rem' }}>LEAST OLD Music</h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>{latestMusic?.title || "Searching..."}</p>
          </div>
        </Link>
      </div>

      {/* FEATURED PROMO */}
      <div className="featured-promo" style={{ 
            marginTop: '30px', 
            border: '2px solid var(--color-orange)', 
            padding: '20px', 
            borderRadius: '8px',
            background: 'rgba(255, 140, 0, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: 'var(--color-orange)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              [ Featured_Friend_Project ]
            </h4>

            <div style={{ marginBottom: '10px' }}>
              <a 
                href="https://snkrgirl.cfd/blog/posts/2026-02-22-adistar.html" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: 'var(--color-pink-hot)', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  textDecoration: 'underline',
                  lineHeight: '1.2',
                  display: 'block'
                }}
              >
                The Adidas Adistar is a psyop
              </a>
            </div>

            <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: '1.4' }}>
              Agatha explains why this shoe is ugly, and extremely ugly, and why it should be ugly to you too. Well not really, but I had to sell it.
            </p>

            <div style={{ 
              position: 'absolute', 
              right: '10px', 
              bottom: '-5px', 
              fontSize: '3rem', 
              opacity: 0.1, 
              pointerEvents: 'none',
              fontWeight: 'bold' 
            }}>
              FRIEND_AGATHA_GOOD
            </div>
      </div>

      {/* SYSTEM STATUS */}
      <div className="system-status-container" style={{
        background: 'rgba(0, 0, 0, 0.05)',
        padding: '30px',
        borderRadius: '15px',
        borderLeft: '8px solid var(--color-purple-retro)',
        marginTop: '60px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-purple-retro)' }}>
          [ PERSONAL_STATUS ]
        </h4>
        <p style={{ margin: 0, fontSize: '0.85rem', fontFamily: 'monospace', lineHeight: '1.6' }}>
          {`> It's just really nice to have everyone here.`}<br/>
          {`> No, really my back is fine. I just bend over like this sometimes for fun.`}<br/>
          {`> I'm going to go into my room for a little bit. There's a second container of deviled eggs in the fridge.`}
        </p>
      </div>
    </div>
  );
}