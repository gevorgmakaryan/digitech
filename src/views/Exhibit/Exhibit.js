import React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Hero, Promo, WhyToExhibit } from './components';

const Exhibit = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        position="relative" 
        sx={{
          background: 'url("/assets/backgrounds/palazzo-visconti.jpg") no-repeat center',
          backgroundSize: 'cover',
        }}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          width={'100%'}
          height={'100%'}
          bgcolor={alpha(theme.palette.background.dark, 0.8)}
          zIndex={1}
        />
        <Container position={'relative'} zIndex={2} paddingY={{ xs: 8, sm: 12, md: 16, lg: 18 }}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Promo />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <WhyToExhibit />
        </Container>
      </Box>
    </Box>
  );
};

export default Exhibit;
