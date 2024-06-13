import React from 'react';
import { Box, Typography } from '@mui/material';

const Skill = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ height: '100vh', backgroundColor: 'white', p: 4 }}>
    <Typography variant="h2">Skill Section</Typography>
    <p>Content for the skill section.</p>
  </Box>
));

export default Skill;
