import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import the helper from your central data hub
import { allPosts, getLatestByCategory } from '../data/index'; 
import { beachStory } from '../data/beachStory'; 
import { videoList } from '../data/videoList';
import { musicList } from '../data/musicList';

export default function Home() {
  // 2. Use the central helper instead of writing a new one here
  const latestHoops = getLatestByCategory('Basketball');
  const latestPersonal = getLatestByCategory('Personal');
  const latestPamage = getLatestByCategory('Pamage');
  
  const latestVideo = videoList[videoList.length - 1];
  const latestMusic = musicList[musicList.length - 1];

  return (
    <div className="home-container" style={{ maxWidth: '100%' }}>
      {/* HERO SECTION */}
      <div style={{ 
        padding: '20px 0', 
        marginBottom: '30px', 
        borderBottom: '2px dashed var(--color-orange)' 
      }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          Monta World Peace Dot Com
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          Kinda like if anything new happens it will show up here.
        </p>
      </div>

      {/* MAIN NAVIGATION GRID */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '20px',
        marginBottom: '40px'
      }}>
        
        {/* LATEST BASKETBALL */}
        {latestHoops && (
          <Link to={`/post/${latestHoops.slug}`}>
            <div className="content-card" style={{ border: '2px solid var(--color-pink-hot)', height: '100%', maxWidth: 'none' }}>
              <h4 style={{ color: 'var(--color-pink-hot)', marginTop: 0 }}>Latest Basketball</h4>
              <p style={{ fontSize: '0.85rem' }}>{latestHoops.title}</p>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{latestHoops.date}</span>
            </div>
          </Link>
        )}

        {/* LATEST PERSONAL */}
        {latestPersonal && (
          <Link to={`/post/${latestPersonal.slug}`}>
            <div className="content-card" style={{ border: '2px solid var(--color-orange)', height: '100%', maxWidth: 'none' }}>
              <h4 style={{ color: 'var(--color-orange)', marginTop: 0 }}>Latest Personal</h4>
              <p style={{ fontSize: '0.85rem' }}>{latestPersonal.title}</p>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{latestPersonal.date}</span>
            </div>
          </Link>
        )}

        {/* LATEST PAMAGE */}
        {latestPamage && (
          <Link to={`/post/${latestPamage.slug}`}>
            <div className="content-card" style={{ border: '2px solid var(--color-purple-retro)', height: '100%', maxWidth: 'none' }}>
              <h4 style={{ color: 'var(--color-purple-retro)', marginTop: 0 }}>Pamage Logs</h4>
              <p style={{ fontSize: '0.85rem' }}>{latestPamage.title}</p>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{latestPamage.date}</span>
            </div>
          </Link>
        )}

        {/* FEATURED STORY */}
        <Link to="/library">
          <div className="content-card" style={{ border: '2px solid var(--color-pink-hot)', height: '100%', maxWidth: 'none' }}>
            <h4 style={{ color: 'var(--color-pink-hot)', marginTop: 0 }}>Library</h4>
            <p style={{ fontSize: '0.85rem' }}>Featured: {beachStory.title}</p>
          </div>
        </Link>

        {/* LATEST VIDEO */}
        <Link to="/videos">
          <div className="content-card" style={{ border: '2px solid var(--color-orange)', height: '100%', maxWidth: 'none' }}>
            <h4 style={{ color: 'var(--color-orange)', marginTop: 0 }}>Video Archives</h4>
            <p style={{ fontSize: '0.85rem' }}>{latestVideo?.title || "No videos found."}</p>
          </div>
        </Link>

        {/* LATEST MUSIC */}
        <Link to="/music">
          <div className="content-card" style={{ border: '2px solid var(--color-purple-retro)', height: '100%', maxWidth: 'none' }}>
            <h4 style={{ color: 'var(--color-purple-retro)', marginTop: 0 }}>Music Repository</h4>
            <p style={{ fontSize: '0.85rem' }}>Latest: {latestMusic?.title || "No tracks found."}</p>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>[ Listen on SoundCloud ]</span>
          </div>
        </Link>
      </div>

      {/* SYSTEM STATUS */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.05)',
        padding: '30px',
        borderRadius: '15px',
        borderLeft: '8px solid var(--color-purple-retro)',
        marginTop: '60px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-purple-retro)' }}>
          [ SYSTEM_STATUS ]
        </h4>
        <p style={{ margin: 0, fontSize: '0.85rem', fontFamily: 'monospace', lineHeight: '1.6' }}>
          {`> Shit's happening I dunno`}<br/>
          {`> I don;t know`}<br/>
          {`> Status: Status levels static.`}
        </p>
      </div>
    </div>
  );
}