/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Typography
        variant={'h3'}
        component={'h1'}
        align={'center'}
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 700,
          textTransform: 'uppercase',
        }}
      >
        Join, present and develop your business at DigiTech Milan
      </Typography>
      <Typography
        variant={'h6'}
        component={'h3'}
        gutterBottom
        align={'center'}
        sx={{
          color: theme.palette.common.white,
          fontWeight: 300,
        }}
      >
        DigiTech creates remarkable opportunity for tech companies to exhibit at Italy's financial capital Milan.
      </Typography>
      <Box
        marginTop={4}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          marginRight={{ xs: 0, sm: 2 }}
          marginBottom={{ xs: 2, sm: 0 }}
        >
          <Button
            component={'a'}
            href="https://forms.gle/dR3yTYJ8MepyTjwX8"
            target={'_blank'}
            variant={'outlined'}
            size={'large'}
            fullWidth={!isMd}
            sx={{
              borderColor: alpha(theme.palette.common.white, 0.7),
              color: alpha(theme.palette.common.white, 0.7),
            }}
          >
            Apply to attend
          </Button>
        </Box>
        <Box>
          <Button
            component={'a'}
            href={'https://forms.gle/U4FFcrsNWCf559sV9'}
            target={'_blank'}
            variant={'contained'}
            size={'large'}
            fullWidth={!isMd}
          >
            Apply to exhibit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
