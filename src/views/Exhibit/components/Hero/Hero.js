/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant={'h2'}
        component={'h1'}
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 700,
        }}
      >
        Join, present and develop your business at Digitech Milan 2022
      </Typography>
      <Typography
        variant={'h4'}
        component={'h3'}
        gutterBottom
        sx={{
          color: alpha(theme.palette.common.white, 0.7),
          fontWeight: 700,
        }}
      >
        Digitech creates remarkable opportunity for tech companies to exhibit at Italy's financial capital Milan.
      </Typography>
    </Box>
  );
};

export default Hero;