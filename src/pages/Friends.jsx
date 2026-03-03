import React from 'react';

export default function Friends() {
  const friends = [
    {
      name: "Tiger",
      link: "https://linktr.ee/tigerrawr38",
      description: "My beautiful partner making beautiful things.",
      tag: "Artist",
      image: "/images/tiger-avatar.jpg" 
    },
    {
      name: "Friend Name 2",
      link: "https://youtube.com/example",
      description: "Another description here. Keeping it personal makes the community feel real.",
      tag: "Musician",
      image: "" 
    },
    // ... add more friends here
  ];

  // HELPER: Generates a random number between -1.5 and 1.5
  const getRandomRotation = () => (Math.random() * 3 - 1.5).toFixed(2);

  const lightPurple = '#9D50BB';

  return (
    <div className="friends-page-wrapper">
      <div style={{ padding: '20px 0', marginBottom: '30px', borderBottom: '2px dashed var(--color-orange)' }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>Friends' Corner</h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>Shout-outs to the people making cool things.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '40px', // Increased gap to allow for the rotation overlap
        padding: '20px' // Padding so the tilts don't hit the screen edge
      }}>
        {friends.map((friend, index) => {
          // Calculate a unique rotation for THIS specific card
          const rotation = getRandomRotation();
          
          return (
            <a 
              key={index} 
              href={friend.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                transform: `rotate(${rotation}deg)` // APPLIES THE RANDOM TILT
              }}
              className="friend-card-link"
            >
              <div className="content-card friend-card" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: `2px solid ${lightPurple}`,
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Added a "springy" snap effect
                padding: '0',
                overflow: 'hidden',
                maxWidth: 'none'
              }}>
                
                {/* IMAGE SECTION */}
                <div style={{ 
                  width: '100%', 
                  height: '180px', 
                  backgroundColor: 'var(--color-pink-light)',
                  overflow: 'hidden',
                  borderBottom: `2px solid ${lightPurple}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {friend.image ? (
                    <img 
                      src={friend.image} 
                      alt={friend.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <span style={{ fontSize: '3rem', opacity: 0.3 }}>?</span>
                  )}
                </div>

                {/* TEXT CONTENT SECTION */}
                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ margin: 0, color: 'var(--color-purple-retro)' }}>{friend.name}</h3>
                    <span style={{ 
                      fontSize: '0.6rem', 
                      backgroundColor: 'var(--color-pink-hot)', 
                      color: 'white', 
                      padding: '3px 6px', 
                      borderRadius: '4px',
                      fontWeight: 'bold'
                    }}>
                      {friend.tag}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.4', margin: '0 0 15px 0', flexGrow: 1 }}>
                    {friend.description}
                  </p>

                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: lightPurple, textAlign: 'right' }}>
                    View Work ↗
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}