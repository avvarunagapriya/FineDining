import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <RestaurantIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Fine Dining
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/menu">Menu</Button>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;