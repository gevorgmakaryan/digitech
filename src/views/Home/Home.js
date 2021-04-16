import React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Container from 'common/Container';
import { Hero, Promo, AboutMilan, Publishers, WhyToExhibit, WhyToAttend, Venue } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        position="relative" 
        sx={{
          backgroundColor: theme.palette.background.dark,
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
          bgcolor={alpha(theme.palette.background.dark, 0.5)}
          zIndex={2}
        />
        <Container position={'relative'} zIndex={3} paddingY={{ xs: 8, sm: 12, md: 16, lg: 18 }}>
          <Hero />
        </Container>
      </Box>
      <Divider />
      <Box bgcolor={'alternate.main'}>
        <Container  maxWidth={'100%'}>
          <Promo />
        </Container>
      </Box>
      <Divider />
      <Box
        sx={{
          background: 'url("/assets/backgrounds/milan-hero.jpg") no-repeat center',
          backgroundSize: 'cover',
          position: 'relative',
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
          bgcolor={alpha(theme.palette.common.white, 0.8)}
          zIndex={2}
        />
        <Container position={'relative'} zIndex={3}>
          <AboutMilan />
        </Container>
        <Container maxWidth={800} position={'relative'} zIndex={3} paddingTop={'0 !important'}>
          <Publishers />
        </Container>
      </Box>
      <Divider />
      <Box
        position="relative" 
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <WhyToExhibit />
        </Container>
      </Box>
      <Divider />
      <Container>
        <WhyToAttend />
      </Container>
      <Divider />
      <Box bgcolor="alternate.main">
        <Container>
          <Venue />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
