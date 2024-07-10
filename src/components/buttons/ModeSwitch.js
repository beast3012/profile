import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../ThemeContext';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  // ... your styled switch code ...
}));

export default function ModeSwitch() {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={mode === 'dark'}
          onChange={toggleTheme}
        />
      }
      label="Dark Mode"
    />
  );
}
