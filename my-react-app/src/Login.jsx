import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material'; // Import MUI components

export default function Login() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: '#FCFAF7s', 
        width: '100vw',  
        height: '100vh', 
        margin: 0,       
        padding: 0,    
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column' // Stack children vertically
      }}
    >
      {/* Image at the top */}
      <Box sx={{ mb: 4 }}>
        <img 
          src="/LoginPhoto.png" 
          alt="Login"
          style={{ width: '300px', height: 'auto' }} // Adjust width and height
        />
      </Box>
      <Box textAlign="center" sx={{ mb: 4}}>
        <Typography variant="h4" gutterBottom>
            Welcome back to <br />
                 Baskit
        </Typography>
        <Box sx={{ mb: 2 }}>
          <TextField 
            label="Username" 
            variant="outlined" 
            sx={{ mb: 2, width: '300px' }} // Set width and margin
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            type="password" 
            sx={{ mb: 2, width: '300px' }} // Set width and margin
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' ,gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Login
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClick}>
            New to Baskit? Sign Up now.
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
