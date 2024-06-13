import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ height: '100vh', backgroundColor: 'white', p: 4 }}>
    <Typography variant="h2">Home Section</Typography>
    <p>Content for the home section.</p>
  </Box>
));

export default Home;
