import React from 'react';
import { Container, Typography, Grid2, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid2 container spacing={6}>
        <Grid2 xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" component="p">
            Founded in 2010, Fine Dining has been serving exceptional cuisine to our valued guests for over a decade. Our passion for culinary excellence and dedication to service has made us one of the most respected restaurants in the city.
          </Typography>
          <Typography variant="body1" component="p">
            Our team of expert chefs combines traditional techniques with modern innovation to create unforgettable dining experiences. We source only the finest ingredients from local suppliers and international markets to ensure the highest quality in every dish.
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              height: '400px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default About;