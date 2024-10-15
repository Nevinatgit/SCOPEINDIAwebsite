import React, { useState, useEffect } from 'react';
import "./styles/Style.css"

const App = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prev) => (prev + 1) % 4);
    }, 2000); // Change div every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="container">
      <div className="overlay">
        <div>Div 1</div>
        <div className={`content ${currentDiv === 1 ? 'show' : ''}`}>Div 2</div>
        <div className={`content ${currentDiv === 2 ? 'show' : ''}`}>Div 3</div>
        <div className={`content ${currentDiv === 3 ? 'show' : ''}`}>Div 4</div>
      </div>
    </div>
  );
};

export default App;
