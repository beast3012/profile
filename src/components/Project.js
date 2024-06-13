import React from 'react';
import { Box, Typography } from '@mui/material';

const Project = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ height: '100vh', backgroundColor: '#c0c0c0', p: 4 }}>
    <Typography variant="h2">Project Section</Typography>
    <p>Content for the project section.</p>
  </Box>
));

export default Project;
