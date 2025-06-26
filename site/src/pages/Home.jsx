import React from 'react';
import Hero from '../components/Hero';
import { Box, Container, Typography, Grid2, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Hero />
      
      {/* Featured Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Fresh Ingredients
                </Typography>
                <Typography variant="body1">
                  We use only the finest and freshest ingredients in all our dishes.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Expert Chefs
                </Typography>
                <Typography variant="body1">
                  Our world-class chefs bring years of experience to create exceptional dishes.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Elegant Atmosphere
                </Typography>
                <Typography variant="body1">
                  Enjoy your meal in our beautifully designed restaurant space.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Home;