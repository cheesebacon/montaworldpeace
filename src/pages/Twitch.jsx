import React, { useState, useEffect } from 'react';

export default function Twitch() {
  const [isLive, setIsLive] = useState(false);
  const channelName = "montaworldpeace";
  const lightPurple = '#9D50BB';

  // Your Twitch API Credentials
  const CLIENT_ID = 'ng012e5xkmsqbhxts7eek6vfgriwwz';
  const CLIENT_SECRET = 'p4ypeaurjpc56fyoepwgust6jrk784';

  useEffect(() => {
    async function checkStatus() {
      try {
        // 1. Get Access Token
        const tokenResponse = await fetch(
          `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
          { method: 'POST' }
        );
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // 2. Check Stream Status
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

        // 3. Update State (data array is empty if offline)
        setIsLive(streamData.data && streamData.data.length > 0);
      } catch (error) {
        console.error("Twitch API Error:", error);
      }
    }

    checkStatus();
    // Optional: Re-check every 5 minutes
    const interval = setInterval(checkStatus, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="twitch-page-wrapper">
      {/* HEADER */}
      <div style={{ padding: '20px 0', marginBottom: '30px', borderBottom: '2px dashed var(--color-orange)' }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          MontaWorldPeace.Twitch.com/live
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          america.com/incredibledeals/sale
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* PLAYER SECTION */}
        <div className="content-card" style={{ padding: '10px', backgroundColor: '#000', border: `2px solid ${lightPurple}`, maxWidth: 'none' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src={`https://player.twitch.tv/?channel=${channelName}&parent=${window.location.hostname}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              title="Twitch Player"
            ></iframe>
          </div>
        </div>

        {/* INFO & CHAT GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '20px', minHeight: '400px' }}>
          
          {/* STREAM INFO */}
          <div className="content-card" style={{ maxWidth: 'none' }}>
            <h3 style={{ color: 'var(--color-purple-retro)', marginTop: 0 }}>Broadcast Status</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              {/* Dynamic Status Light */}
              <div className={isLive ? "status-light-live" : "status-light-offline"}></div> 
              <span style={{ fontWeight: 'bold', color: isLive ? '#ff0000' : 'inherit', opacity: isLive ? 1 : 0.7 }}>
                {isLive ? "BROADCAST LIVE" : "SIGNAL LOST / OFFLINE"}
              </span>
            </div>
            <p>I just wanted a place to have my Twitch stream to give to people who may not know exactly how to move around on Twitch! Hi Mom! I mean that with love! So much love!</p>
            
            <a 
              href={`https://twitch.tv/${channelName}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block', 
                padding: '10px 20px', 
                backgroundColor: isLive ? '#ff0000' : lightPurple, 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold',
                marginTop: '10px',
                transition: 'background-color 0.3s ease'
              }}
            >
              {isLive ? "Join the Live Chat" : "Follow on Twitch"}
            </a>
          </div>

          {/* CHAT EMBED */}
          <div className="content-card chat-container" style={{ padding: '0', overflow: 'hidden', maxWidth: 'none', border: `2px solid ${lightPurple}` }}>
            <iframe
              src={`https://www.twitch.tv/embed/${channelName}/chat?parent=${window.location.hostname}`}
              height="100%"
              width="100%"
              title="Twitch Chat"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}