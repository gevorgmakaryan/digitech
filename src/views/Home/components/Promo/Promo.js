/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Promo = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant={'h3'}
        component={'h3'}
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 600,
        }}
      >
        Milan: the city of rising IT engineering
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        gutterBottom
        sx={{
          color: alpha(theme.palette.common.white, 0.7),
        }}
      >
        Milan is Italy's financial and industrial capital, as well one of the world's leading cities of creative field.
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        sx={{
          color: alpha(theme.palette.common.white, 0.7),
        }}
      >
        Having an important business history and being the largest Italian industrial center, Milan is definitely an attractive destination, with a big business opportunities, for tech companies.
      </Typography>
    </Box>
  );
};

export default Promo;
