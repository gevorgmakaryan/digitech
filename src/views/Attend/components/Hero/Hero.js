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
        Come to Milan, attend Digitech Milan 2022
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
        Discover the world's leading companies at <strong>Digitech Milan 2022</strong>
      </Typography>
    </Box>
  );
};

export default Hero;
