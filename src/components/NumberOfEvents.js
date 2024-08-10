import React, { useState } from 'react';

function NumberOfEvents({ setCurrentNOE, setErrorAlert }) {
  const [number, setNumber] = useState(32);

  const handleChange = (event) => {
    let value = event.target.value;
    let numericValue = Number(value);

    setNumber(value);

    let errorText = "";
    if(isNaN(numericValue) || numericValue <= 0) {
      errorText = 'Please enter a number greater than zero.'
    } 
    setCurrentNOE(numericValue);
    setErrorAlert(errorText);
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
