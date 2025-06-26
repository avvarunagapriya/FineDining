import React from 'react';
import { Container, Typography, Grid2, TextField, Button, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      
      <Grid2 container spacing={6}>
        <Grid2 item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 2 }} />
              <Typography>123 Restaurant Street, Foodville, FC 12345</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 2 }} />
              <Typography>(555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 2 }} />
              <Typography>info@finedining.com</Typography>
            </Box>
          </Box>
          
          <Box>
            <Typography variant="h5" gutterBottom>
              Opening Hours
            </Typography>
            <Typography>Monday - Friday: 11:00 AM - 10:00 PM</Typography>
            <Typography>Saturday - Sunday: 10:00 AM - 11:00 PM</Typography>
          </Box>
        </Grid2>
        
        <Grid2 item xs={12} md={6}>
          <Box component="form" noValidate>
            <Grid2 container spacing={2}>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                >
                  Send Message
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Contact;