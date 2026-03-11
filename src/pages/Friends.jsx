import React from 'react';

export default function Friends() {
  const friends = [
    {
      name: "Tiger",
      link: "https://linktr.ee/tigerrawr38",
      description: "My beautiful partner making beautiful things. Furry art typically, but, like, the good and interesting kind. Just being around her makes me happy, so it feels good to share her presence with the world.",
      tag: "Artist",
      image: "/images/tiger-avatar.jpg" 
    },
    {
      name: "Agatha",
      link: "https://snkrgirl.cfd/index.html",
      description: "One of my Brazilian besties discussing fashion, culture, and most importantly: sneakers. Inspired me to sign up for Adidas release emails. Also has a Sneaker Wednesday thing going on her Fedi account. Find that on your own.",
      tag: "Sneaker Enthusiast",
      image: "/images/agatha.jpg" 
    },
    {
      name: "Syphist",
      link: "https://zoner.work/@syphist",
      description: "Transition goals, among other things lol. Recovery goals. Self-actualization goals. Just an extremely giving and interesting person I've been lucky enough to be close friends with for a bit now. Notable badass.",
      tag: "Dope Person",
      image: "/images/chloe.png" 
    },
    {
      name: "Fennel",
      link: "https://discord.gg/gXmS2AxSXk",
      description: "A sincerely incisive, creative, and hilarious person who took it upon herself to start a community of similarly awesome people. First person I met as a friend while out as a trans person, which means I love her forever.",
      tag: "Community Creator",
      image: "/images/fennel.png" 
    },
    {
      name: "Top 3 Protected",
      link: "https://open.spotify.com/show/5kGDSoGmHrnOehQFhacMKL",
      description: "Have you ever wanted to listen to a basketball podcast that makes you think 'I'm glad I'm wearing headphones?' This one is perfect. Hilarious as shit while still giving exceptionally high level basketball analysis. Eddie, CJ, and Robi are naturals. They just have real life schedules.",
      tag: "Podcast",
      image: "/images/top3.png" 
    },
    {
      name: "The Dunker Spot",
      link: "https://open.spotify.com/show/4ci0WrkZSWvKPjBCCMSlJe",
      description: "Nekias and Steve are better at talking about basketball than anyone. Maybe Caitlin Cooper and Samson are up there. I don't know. But it's just them. This is a podcast that will make you better as a person.",
      tag: "Podcast",
      image: "/images/dunkerspot.png" 
    },
    {
      name: "FizTheAncient",
      link: "https://bsky.app/profile/fiztheancient.bsky.social",
      description: "My best friend of 20 years. Basically the funniest person alive. Basically. Draws stuff! Lots of comics of her fascinating characters! WARNING: Occasional NSFW content. It's marked, but like, yeah. Grow up.",
      tag: "Artist",
      image: "/images/fiz.png" 
    },
    {
      name: "Hollyrious",
      link: "https://www.twitch.tv/hollyrious",
      description: "The person whom I consider to be a born streamer. I cried watching her play Death Stranding, so that probably means she's good. I'd like to say more? I don't know. Just a genuine, awesome person who found a genuine, awesome talent.",
      tag: "Twitch Streamer",
      image: "/images/holly.png" 
    },
    {
      name: "Kat",
      link: "https://www.twitch.tv/puzzler995",
      description: "Friend, streamer, and one of the eight unelected rulers of North Carolina along with Nekias, Tia, and five Bryce Youngs. She paints gundams sometimes! And she goes hard! Ask her about Bojangles. When she gets tired of it, ask her about Cookout.",
      tag: "Streamer",
      image: "/images/kat.png" 
    },
    {
      name: "busyxb",
      link: "https://wbb-roundup.beehiiv.com/subscribe",
      description: "Black Rosie Media contributor and newsletterer. National basketball coverage from a kickass dude with a local focus on things NYC. Very much on the pulse of labor negotiations and, well, things you have to be really good at your job for.",
      tag: "Journalist",
      image: "/images/busy.jpg" 
    },
    {
      name: "Rebekah Valentine",
      link: "https://www.ign.com/person/duckvalentine",
      description: "The best game journalist. Maybe the best journalist. I think about 36% of my self-esteem at one point came from her attitude, interest, and advice as my editor. I'm her fault, to some small degree lol.",
      tag: "Journalist",
      image: "/images/rebekah.jpg" 
    },
    {
      name: "FlyingBatteryBacon",
      link: "purevolume.com/constantreminder",
      description: "One of the two best composers I know, and one of my best friends since like fucen high school. Really good at counterstrike. Not Source. The good one.",
      tag: "Composer",
      image: "/images/bacon.png" 
    },
    {
      name: "RichBoi217",
      link: "https://linktr.ee/richboi217",
      description: "Probably the nicest human being I've ever met. The most welcoming type of funny. Does so much of everything. One of two people I can watch do Lets Plays. Maybe three. Hard to say. Again, kind af. Big Notre Dame and Packer fan, so great follow for that! And sports/wrestling in general.",
      tag: "Everything",
      image: "/images/richboi.png" 
    },
    {
      name: "In the NO",
      link: "https://www.youtube.com/@inthenopod",
      description: "Jeremy, Shamit, and Mason talk all things Pelicans. Jeremy is also one of the best BlueSky follows in the world. Super awesome dudes.",
      tag: "Podcast",
      image: "/images/intheno.jpg" 
    },
    {
      name: "RiversDKappa",
      link: "https://www.youtube.com/@inthenopod",
      description: "One of my longest-term friends. Chill h*ckin' dude. Once thought it was weird to talk to him because I was in college and he was in high school. I'm 39 at the moment. Seems a bit dumb in retrospect.",
      tag: "Streamer To-be",
      image: "/images/rivers.webp" 
    },
    {
      name: "Matthew 'The' Mongoose",
      link: "https://www.twitch.tv/mattmongoose",
      description: "College Football, NBA2K, and Fort. Critically, he did a 2k sim where not only was I a successful head coach, I was the best coach ever, and he used a woman as my avatar. True Ally. True Goat. We share a birthday. He knows that particular pain. Don't joke about it.",
      tag: "Streamer",
      image: "/images/mattmongoose.jpg" 
    },
    {
      name: "Eeyore",
      link: "https://www.twitch.tv/mattmongoose",
      description: "He's a lawyer. He says he's a lawyer anyway. But if he is a lawyer, to be clear, he is not your lawyer.",
      tag: "Streamer",
      image: "/images/eeyore.gif" 
    },
    {
      name: "SylviaBun",
      link: "https://www.twitch.tv/sylviabun",
      description: "Quickly becoming one of my closest friends while starting a new life together with their partner. They are awesome and they stream sometimes. I recommend watching their streams on your phone in a parking lot in Hines Park while you eat a sammich.",
      tag: "Streamer",
      image: "/images/syl.jpeg"
    },
    {
      name: "Rittless",
      link: "https://en.wikipedia.org/wiki/Buffalo_Wild_Wings",
      description: "My best friend of 20 years. (I have two.) Nothing to link exactly, but extremely need to give the dude his own space. I owe a few life debts. He has one of them.",
      tag: "Bestie",
      image: "/images/iconritty.png"
    },
    {
      name: "Viv",
      link: "https://viviart.zoner.work/",
      description: "Neato Burrito Artist Person doing digital, physical, everything art. Link to her own personal page is here! There's a burger-based piece. That one might be my favorite!",
      tag: "Artist",
      image: "/images/viv.jpg"
    },
    {
      name: "Zoe",
      link: "https://www.twitch.tv/zozonuts",
      description: "Czechia's sole representative on this page. Chill streamer, brilliant basketball mind, and youth coach. You can also follow her for basketball takes on Twitter @ZoeCoachesBall, which I'm not directly linking because that's where the nazis are. :)",
      tag: "Stroach",
      image: "/images/zozo.jpg"
    },
    {
      name: "Crab",
      link: "https://www.instagram.com/dereksingerphotography",
      description: "Almost feels a bit demeaning to just have the name 'Crab' here, considering his work with underwater photography blows my mind. Dude is an artist and loves this shit. And it shows in everything he shares. Portfolio at: https://derekcs.darkroom.com/",
      tag: "Photographer",
      image: "/images/crab.png"
    },
    {
      name: "Ceri",
      link: "https://fedi.miawgogo.me/",
      description: "I wish I had something more personal to say about Ceri other than overwhelming appreciation of her love for the ones they love. Someone I just fell into contact with out of concern for a third party and then, over time, just kinda realized they were someone I just enjoyed being around. Follow them for lovely things. :)",
      tag: "Awesome",
      image: "/images/ceri.png"
    },
    {
      name: "Clarisse",
      link: "https://tech.lgbt/@Clarisse",
      description: "Brazilian bestie who deserves a shoutout just for being awesome. She makes incredible food and has an enviable sense of style. Basically my platonic ideal of a chill ass person.",
      tag: "Vibes",
      image: "/images/clarisse.jpg"
    },
    {
      name: "Dontizzle",
      link: "https://bsky.app/profile/dontizzlejones.bsky.social",
      description: "Maybe of all my friends on the internet I haven't met yet, Dante is the dude. I live by some shit he's taught me daily, plus he's a Chicago sports dude that loves the city and its teams. Follow his socials to keep up with his thoughts and work.",
      tag: "Everything",
      image: "/images/dontizzle.png"
    },
    {
      name: "Ian Levy",
      link: "https://bsky.app/profile/hickoryhigh.bsky.social",
      description: "The majority of my writing self esteem ever was supplied by this dude. The most thoughtful, caring, genuinely passionate editor I've EVER had the honor to come across, plus a great writer himself. Online writing is not great. Ian does whatever he can to make anything he can better.",
      tag: "FS Lighthouse",
      image: "/images/ian.webp"
    },
    {
      name: "Auwa",
      link: "https://bsky.app/profile/auwa.bsky.social",
      description: "I think I met Auwa at first as the worst, most deluded version of myself. Kinda got embarrassed and lost contact. Later, we got to reacquaint and the thing I most realize is how much time I lost hanging out with an awesome person because I didn't know who tf I was. She's super neat and fun.",
      tag: "Unofficial Internet Administrator",
      image: "/images/auwa.webp"
    },
    {
      name: "Kaz",
      link: "https://gofund.me/acacde3ef",
      description: "Just a consummate badass. Has overcome more in their young life than I ever have. If you're choosing between contributing to my stupid site or them and their surgery, PICK THEM. They deserve all the care, love, and support in the world.",
      tag: "Badass",
      image: "/images/kaz.png"
    },
    {
      name: "Andy",
      link: "https://zoner.work/@Andy",
      description: "DnD DM. I don't want to say anything that might be taken wrong. Andy is the most important person in the world, and I believe all other Andy's should change their name out of reverence. I show my respect to them by apologizing way too much. Kind of our thing.",
      tag: "Vibes",
      image: "/images/andy.gif"
    },
    {
      name: "Fay",
      link: "https://bsky.app/profile/fayv.bsky.social",
      description: "Kind of the platonic ideal of an interesting person. You might find yourself in a paint shop one day then wake up 5 years later with a bachelors in philosophy and a bit more aware of everything than maybe you'd like to be lol",
      tag: "Philosopher",
      image: "/images/fay.webp"
    },
    {
      name: "RedCyberPandaz",
      link: "https://www.twitch.tv/redcyberpandaz",
      description: "One of the people about whom you say 'I so admire how they remain who they are day-to-day.' An exceptional inspiration to me early in my transition and someone that makes me excited about the idea of maybe one day going to Appalachia.",
      tag: "Vibes",
      image: "/images/rcp.png"
    },
    {
      name: "Aya Freya",
      link: "https://www.twitch.tv/neptuwunium",
      description: "How much have you ever really thought about Neptune? Not a lot for most of you, right? But maybe there are some of you who think 'Dude, I love Neptune.' Mfer you do NOT love Neptune like this. As a person, I'm not sure I've met anyone more dedicated to who or what they care about.",
      tag: "Streamer/DnD Auteur",
      image: "/images/ada.png"
    },
    {
      name: "Kelly Dwyer",
      link: "https://www.kdonhoops.com/",
      description: "Essentially my inspiration for making a site whatsoever. K Don Hoops. That's not how it's pronounced. One of the good guys in sports journalism, one of the best sports journalists inspiring others to realize their own value to the world.",
      tag: "Forerunner",
      image: "/images/kdon.png"
    }
  ];

  const tiger = friends.find(f => f.name === "Tiger");
  const everyoneElse = friends.filter(f => f.name !== "Tiger");
  const shuffledOthers = [...everyoneElse].sort(() => Math.random() - 0.5);
  const finalFriendsList = tiger ? [tiger, ...shuffledOthers] : shuffledOthers;

  const getRandomRotation = () => (Math.random() * 8 - 4).toFixed(2);
  const lightPurple = '#9D50BB';

  return (
    <div className="friends-page-wrapper">
      <div style={{ padding: '20px 0', marginBottom: '30px', borderBottom: '2px dashed var(--color-orange)' }}>
        <h2 style={{ color: 'var(--color-purple-retro)', fontSize: '2.5rem', margin: 0 }}>Friends' Corner!!</h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
          I'm lucky enough to know so many creative, wonderful, hard-working people. I wanted a place to shout people I like out in case you're potentially looking for someone new to follow, watch, or form a parasocial relationship with.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '40px', 
        padding: '20px' 
      }}>
        {finalFriendsList.map((friend) => {
          const rotation = getRandomRotation();
          
          return (
            <a 
              key={friend.name}
              href={friend.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              className="friend-card-link"
            >
              <div 
                className="content-card friend-card" 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `2px solid ${lightPurple}`,
                  padding: '0',
                  overflow: 'hidden',
                  maxWidth: 'none',
                  transform: `rotate(${rotation}deg)` /* Rotation moved here */
                }}
              >
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