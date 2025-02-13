import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Box Component - Title of the Store */}
      <Box
        sx={{
          backgroundColor: 'lightblue',
          color: 'darkblue',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Welcome to My Store
      </Box>

      {/* Button Component - Click Counter */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: '16px',
          padding: '10px 20px',
          backgroundColor: 'darkblue',
          ':hover': {
            backgroundColor: 'lightblue',
            color: 'darkblue',
          },
        }}
        onClick={() => setCount(count + 1)} // Increment count on button click
      >
        Clicked {count} times
      </Button>
    </>
  );
}
