import React, { useState } from 'react';

function NumberOfEvents({ onChange }) {
  const [number, setNumber] = useState(32);

  const handleChange = (event) => {
    setNumber(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        id="number-of-events-input"
        type="number"
        value={number}
        onChange={handleChange}
        role="textbox"
      />
    </div>
  );
}

export default NumberOfEvents;
