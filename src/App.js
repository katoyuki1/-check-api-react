import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/items/')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="App">
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
