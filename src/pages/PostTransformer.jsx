import React, { useState } from 'react';

export default function PostTransformer() {
  const [rawText, setRawText] = useState('');
  const [convertedCode, setConvertedCode] = useState('');

  const handleTransform = () => {
    try {
      const contentParts = rawText.split('---').map(part => part.trim());
      
      let slug = "new-post";
      let title = "Untitled Post";
      let date = new Date().toISOString().split('T')[0];
      let category = "Personal";
      let body = [];

      const headerLines = contentParts[0].split('\n');
      headerLines.forEach(line => {
        const lowerLine = line.toLowerCase();
        if (lowerLine.startsWith('title:')) title = line.split(/:(.+)/)[1].trim();
        if (lowerLine.startsWith('slug:')) slug = line.split(/:(.+)/)[1].trim();
        if (lowerLine.startsWith('date:')) date = line.split(/:(.+)/)[1].trim();
        if (lowerLine.startsWith('category:')) category = line.split(/:(.+)/)[1].trim();
      });

      for (let i = 1; i < contentParts.length; i++) {
        const segment = contentParts[i];
        if (!segment) continue;

        const segmentLines = segment.split('\n');
        let textLines = [];
        let noteLines = [];
        let capturingNote = false;

        segmentLines.forEach(line => {
          if (line.toUpperCase().startsWith('NOTE:')) {
            capturingNote = true;
            noteLines.push(line.replace(/NOTE:/i, '').trim());
          } else if (line.toUpperCase().startsWith('TEXT:')) {
            textLines.push(line.replace(/TEXT:/i, '').trim());
          } else {
            if (capturingNote) noteLines.push(line);
            else textLines.push(line);
          }
        });

        body.push({
          text: textLines.join('\n').trim(),
          note: noteLines.join('\n').trim()
        });
      }

      const finalJS = `export const ${slug} = {
  slug: "${slug}",
  title: "${title}",
  date: "${date}",
  category: "${category}",
  body: ${JSON.stringify(body, null, 2)}
};`;

      setConvertedCode(finalJS);
    } catch (err) {
      console.error(err);
      alert("Error parsing text. Check your '---' dividers.");
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', color: '#ccc', fontFamily: 'monospace' }}>
      <h2 style={{ color: 'var(--color-purple-retro)', marginBottom: '30px', borderBottom: '2px solid' }}>
        [ My Personal CMS I Guess ]
      </h2>
      
      {/* INSTRUCTIONS BOX */}
      <div style={{ 
        background: '#111', 
        padding: '20px', 
        borderRadius: '4px', 
        marginBottom: '25px', 
        border: '1px solid #333' 
      }}>
        <p style={{ margin: '0 0 10px 0', color: 'var(--color-orange)', fontSize: '0.85rem', fontWeight: 'bold' }}>
          {`// REQUIRED_SCHEMA:`}
        </p>
        <div style={{ color: '#888', fontSize: '0.8rem', lineHeight: '1.6' }}>
          <p style={{ margin: '2px 0' }}>1. Define metadata at the top (TITLE, SLUG, DATE, CATEGORY).</p>
          <p style={{ margin: '2px 0' }}>2. Use <span style={{ color: 'var(--color-pink-hot)' }}>---</span> to separate paragraphs.</p>
          <p style={{ margin: '2px 0' }}>3. Prefix segments with <span style={{ color: 'var(--color-pink-hot)' }}>TEXT:</span> and footnotes with <span style={{ color: 'var(--color-pink-hot)' }}>NOTE:</span></p>
        </div>
        
        <pre style={{ 
          marginTop: '15px', 
          background: '#000', 
          padding: '10px', 
          fontSize: '0.75rem', 
          color: '#0f0', 
          border: '1px solid #222' 
        }}>
          TITLE: Interesting Topic{'\n'}
          SLUG: recognizable-url{'\n'}
          CATEGORY: Basketball/Personal/Pamage{'\n'}
          ---{'\n'}
          TEXT: Example paragraph. Wow look at all these words.{'\n'}
          NOTE: Grantland style notes go here.
        </pre>
      </div>
      
      <textarea 
        style={{ 
          width: '100%', 
          height: '250px', 
          background: '#111', 
          color: '#eee', 
          fontFamily: 'monospace', 
          padding: '15px', 
          border: '1px solid #444', 
          borderRadius: '4px',
          outline: 'none'
        }}
        placeholder="Input raw transmission..."
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
      />

      <button 
        onClick={handleTransform}
        style={{ 
          marginTop: '20px', 
          padding: '12px 24px', 
          background: 'var(--color-purple-retro)', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer', 
          fontWeight: 'bold', 
          fontFamily: 'monospace',
          borderRadius: '4px' 
        }}
      >
        {`>> CREATE JS OBJECT`}
      </button>

      {convertedCode && (
        <div style={{ marginTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{ margin: 0, color: 'var(--color-orange)', fontSize: '0.9rem' }}>[ GENERATED_OUTPUT ]</h3>
            <button 
              onClick={() => { navigator.clipboard.writeText(convertedCode); alert("Data copied to clipboard."); }}
              style={{ 
                padding: '5px 15px', 
                background: '#333', 
                color: '#fff', 
                border: '1px solid #555', 
                cursor: 'pointer', 
                fontSize: '0.7rem',
                fontFamily: 'monospace'
              }}
            >
              COPY_TO_CLIPBOARD
            </button>
          </div>
          <textarea 
            readOnly
            style={{ 
              width: '100%', 
              height: '300px', 
              background: '#000', 
              color: 'var(--color-pink-hot)', 
              fontFamily: 'monospace', 
              padding: '15px', 
              border: '1px solid #333' 
            }}
            value={convertedCode}
          />
        </div>
      )}
    </div>
  );
}