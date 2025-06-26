import React from 'react';
import { Container, Typography, Grid2, Card, CardContent, CardMedia, Box } from '@mui/material';

const menuItems = [
  {
    category: 'Starters',
    items: [
      { name: 'Classic Caesar Salad', price: '$12', description: 'Crisp romaine lettuce, parmesan cheese, croutons', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9' },
      { name: 'Soup of the Day', price: '$8', description: 'Chef\'s daily special soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd' },
    ]
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Grilled Salmon', price: '$28', description: 'Fresh Atlantic salmon with seasonal vegetables', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288' },
      { name: 'Filet Mignon', price: '$34', description: 'Premium cut beef with truffle sauce', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d' },
    ]
  }
];

const Menu = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Our Menu
      </Typography>
      
      {menuItems.map((category) => (
        <Box key={category.category} sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {category.category}
          </Typography>
          <Grid2 container spacing={4}>
            {category.items.map((item) => (
              <Grid2 item xs={12} sm={6} key={item.name}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      ))}
    </Container>
  );
};

export default Menu;