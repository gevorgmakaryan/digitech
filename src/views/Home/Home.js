import React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Hero, Promo, Publishers, WhyToExhibit, WhyToAttend, Venue } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        position="relative" 
        sx={{
          background: 'url("/assets/backgrounds/milan-hero.jpg") no-repeat center',
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
      <Box bgcolor={theme.palette.background.dark}>
        <Container>
          <Promo />
        </Container>
      </Box>
      <Container maxWidth={800}>
        <Publishers />
      </Container>
      <Container>
        <WhyToExhibit />
      </Container>
      <Box bgcolor={theme.palette.alternate.dark}>
        <Container>
          <WhyToAttend />
        </Container>
      </Box>
      <Container>
        <Venue />
      </Container>
    </Box>
  );
};

export default Home;
