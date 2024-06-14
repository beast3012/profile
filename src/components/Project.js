import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const card = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', width: 100}}
  >
    <Card variant="outlined">
    <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        {/* be{bull}nev{bull}o{bull}lent */}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
    </Card>
  </Box>
);

const Project = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ height: '100vh', backgroundColor: '#c0c0c0', p: 4 }}>
    <Typography variant="h2">Project Section</Typography>
    <p>Content for the project section.</p>
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={3}>
          <Item>{card}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{card}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{card}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{card}</Item>
        </Grid>
      </Grid>
    </Box>
  </Box>
));

export default Project;
