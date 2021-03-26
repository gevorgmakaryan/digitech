/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const AboutMilan = () => {
  return (
    <Box>
      <Typography
        variant={'h3'}
        component={'h3'}
        gutterBottom
        align={'center'}
        sx={{
          fontWeight: 900,
        }}
      >
        Milan: the city of rising tech engineering
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        align={'center'}
        gutterBottom
      >
        Milan is Italy's financial and industrial capital, as well one of the world's leading cities of creative field.
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        align={'center'}
      >
        Having an important business history and being the largest Italian industrial center, Milan is definitely an attractive destination, with a big business opportunities, for tech companies.
      </Typography>
    </Box>
  );
};

export default AboutMilan;
