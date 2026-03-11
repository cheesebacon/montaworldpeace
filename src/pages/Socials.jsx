import React from 'react';

export default function Socials() {
  const socialLinks = [
    { name: 'Bluesky', url: 'https://bsky.app/profile/montaworldpeace.bsky.social', subtitle: 'Everyone on Twitter is a bot or a nazi.' },
    { name: 'YouTube', url: 'https://www.youtube.com/@matrutkowski', subtitle: 'My personal YouTube account I am hoping to do more with.' },
    { name: 'Twitch', url: 'https://www.twitch.tv/montaworldpeace', subtitle: 'Live broadcasts from my computer to yours or one you stole/borrowed' },
    { name: 'FanSided', url: 'https://fansided.com/author/mattrutkowski/', subtitle: 'Professional output on my only ever Sports home' },
    { name: 'Tenor GIFs', url: 'https://tenor.com/users/montaworldpeace', subtitle: 'Just a bunch of dumb stuff you can use' },
    { name: 'JT Team YouTube', url: 'https://www.youtube.com/@tropicalmeow', subtitle: 'The videos Tiger and I do together. More coming soon!'}
  ];

  const lightPurple = '#9D50BB';

  return (
    <div className="socials-page-wrapper">
      {/* HEADER SECTION */}
      <div style={{ 
        padding: '20px 0', 
        marginBottom: '30px', 
        borderBottom: '2px dashed var(--color-orange)' 
      }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>
          Socials and Stuff
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          Here are some places I do things that aren't specifically on this website! The internet is so big.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="social-card-link"
          >
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              padding: '30px',
              borderRadius: '12px',
              border: `1.5px solid ${lightPurple}`,
              textAlign: 'left',
              transition: 'all 0.2s ease-in-out',
              backdropFilter: 'blur(4px)',
            }}
            className="social-card"
            >
              <h3 style={{ margin: '0', color: 'var(--color-purple-retro)', fontSize: '1.3rem' }}>{link.name}</h3>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', opacity: 0.5 }}>{link.subtitle}</p>
              
              <div style={{ 
                marginTop: '15px', 
                fontSize: '0.7rem', 
                fontWeight: 'bold', 
                color: lightPurple,
                opacity: 0.8,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Link Out ↗
              </div>
            </div>
          </a>
        ))}

        {/* DISCORD CARD */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          padding: '30px',
          borderRadius: '12px',
          border: `1.5px dashed ${lightPurple}`,
          opacity: 0.8
        }}>
          <h3 style={{ margin: '0', color: lightPurple, fontSize: '1.1rem' }}>Discord</h3>
          <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--color-purple-retro)' }}>
            @MontaWorldPeace
          </p>
          <span style={{ fontSize: '0.65rem', opacity: 0.4, marginTop: '10px', display: 'block' }}>For as long as I don't have to give my face to anyone, anyway</span>
        </div>

        {/* MASTODON CARD */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          padding: '30px',
          borderRadius: '12px',
          border: `1.5px dashed ${lightPurple}`,
          opacity: 0.8
        }}>
          <h3 style={{ margin: '0', color: lightPurple, fontSize: '1.1rem' }}>Mastodon</h3>
          <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--color-purple-retro)' }}>
            @MontaWorldPeace on tech.lgbt
          </p>
          <span style={{ fontSize: '0.65rem', opacity: 0.4, marginTop: '5px', display: 'block' }}>If you can figure out how to add me, go for it!</span>
        </div>
      </div>
    </div>
  );
}