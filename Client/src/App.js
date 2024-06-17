import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/')
      .then(response => response.text())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <header>
        <h1>Received from backend: {data}</h1>
      </header>
    </div>
  );
}

export default App;
