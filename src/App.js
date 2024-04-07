import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/test/')
      .then(response => {
        setMessage(response.data.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Message from Backend: {message}</p>
      </header>
    </div>
  );
}

export default App;
