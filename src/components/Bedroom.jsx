// Bedroom.jsx
import React from 'react';

function Bedroom({ bedNum }) {
  return (
    <div id={`bedroom-${bedNum}`}>
      <h2>Bedroom {bedNum}</h2>
    </div>
  );
}

export default Bedroom;