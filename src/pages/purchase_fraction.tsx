import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InputButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Handle button click here (e.g., console.log the input value)
    console.log('Input Value:', inputValue);
  };

  return (
    <div className="input-button-container white">
      <TextField
        label="Enter some text"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
};

export default InputButton;
