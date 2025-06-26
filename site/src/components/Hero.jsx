import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          color="white"
          gutterBottom
          align="center"
        >
          Welcome to Fine Dining
        </Typography>
        <Typography variant="h5" color="white" component="p" align="center">
          Experience the art of fine dining with our exquisite menu and ambient atmosphere
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" size="large">
            View Menu
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ color: 'white', borderColor: 'white' }}>
            Book a Table
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;