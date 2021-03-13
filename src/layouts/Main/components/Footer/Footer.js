import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display={'flex'} component="a" underline="none" href="/" title="Digitech Milan" height={{ xs: 16, md: 22 }}>
          <Box
            component="img"
            height={'100%'}
            src={'/assets/logos/logo.svg'}
            alt="Digitech Milan"
          />
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Speaker registration
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/attend"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Apply to attend
            </Link>
          </Box>
          <Box marginTop={1}>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              target="blank"
              href="/exhibit"
              size="small"
            >
              Apply to exhibit
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box display="flex" alignItems={'center'} justifyContent={'center'}>
        <Box marginRight={2}>
          <Link
            component="a"
            href="/privacy"
            color="textSecondary"
            variant={'subtitle2'}
          >
            Privacy Policy
          </Link>
        </Box>
        <Box>
          <Link
            component="a"
            href="/cookies"
            color="textSecondary"
            variant={'subtitle2'}
          >
            Cookie Policy
          </Link>
        </Box>
      </Box>
      <Box marginY={1} display="flex" alignItems={'center'} justifyContent={'center'} width={'100%'}>
        <IconButton component={'a'} href={'https://twitter.com/DigitechMilan'} target={'blank'}>
          <TwitterIcon fontSize="inherit" />
        </IconButton>
        <Box marginX={2}>
          <IconButton component={'a'} href={'https://linkedin.com/company/digitechmilan/'} target={'blank'}>
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <IconButton component={'a'} href={'https://facebook.com/digitechmilan'} target={'blank'}>
          <FacebookIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Typography align={'center'} variant={'subtitle2'} color="textSecondary" gutterBottom>
        &copy; Digitech Milan. 2021. All rights reserved
      </Typography>
      <Typography align={'center'} variant={'caption'} color="textSecondary" component={'p'}>
      When you visit or interact with our sites, services or tools, we or our authorised service providers may use <strong><a href="/cookies">cookies</a></strong> for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
      </Typography>
    </Grid>
  </Grid>
  
);

export default Footer;
