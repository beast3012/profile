import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ height: '100vh', backgroundColor: 'white', p: 4 }}>
    <Typography variant="h2">Home Section</Typography>
    <Typography variant="h3">Hi there!</Typography>
    <Typography variant="h3">My name is Nguyen Tung Lam</Typography>
    <Typography variant="h3">Field: Front-end Developer</Typography>
  </Box>
));

export default Home;
