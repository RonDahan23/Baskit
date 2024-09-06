import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
