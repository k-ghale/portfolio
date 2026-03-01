const KabinLogo = () => {
  const ascii = `
  __    __           __        __           
 |  \\  /  \\         |  \\      |  \\          
 | $$ /  $$ ______  | $$____   \\$$ _______  
 | $$/  $$ |      \\ | $$    \\ |  \\|       \\ 
 | $$  $$   \\$$$$$$\\| $$$$$$$\\| $$| $$$$$$$\\
 | $$$$$\\  /      $$| $$  | $$| $$| $$  | $$
 | $$ \\$$\\|  $$$$$$$| $$__/ $$| $$| $$  | $$
 | $$  \\$$\\$$    $$| $$    $$| $$| $$  | $$
  \\$$   \\$$ \\$$$$$$$ \\$$$$$$$  \\$$ \\$$   \\$$
  `;
  return (
    <div style={{ background: '#1a1b26', padding: '20px', borderRadius: '8px' }}>
      <pre
        style={{
          color: '#00ffcc',
          fontFamily: 'monospace',
          lineHeight: '1.2',
          margin: 0
        }}
        aria-label="Kabin Logo"
      >
        {ascii}
      </pre>
    </div>
  )
}

export default KabinLogo;
