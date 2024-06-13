import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ height: '100vh', backgroundColor: '#c0c0c0', p: 4 }}>
    <Typography variant="h2">Contact Section</Typography>
    <p>Content for the contact section.</p>
  </Box>
));

export default Contact;
