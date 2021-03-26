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
import InstagramIcon from '@material-ui/icons/Instagram';

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
        <Box
          display={'flex'}
          alignItems="center"
          component="a"
          underline="none"
          href="/"
          title="DigiTech Milan"
          sx={{
            textDecoration: 'none !important',
          }}
        >
          <Box
            component="img"
            width={{ xs: 40, sm: 50 }}
            src={'/assets/logos/logo.svg'}
            alt="DigiTech Milan"
            marginRight={{ xs: 1, sm: 2 }}
          />
          <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
            <Box
              component="img"
              height={{ xs: 25, sm: 30 }}
              width={'auto'}
              src={'/assets/logos/logo-alternate--dark.svg'}
              alt="DigiTech Milan"
            />
            <Typography
              variant={'subtitle2'}
              sx={{
                textDecoration: 'none',
                color: 'text.primary',
              }}
            >
              15 - 17 October, 2021
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="https://forms.gle/V2NDV914invuTWrn6"
              target={'_blank'}
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
              href="https://forms.gle/dR3yTYJ8MepyTjwX8"
              target={'_blank'}
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
              href={'https://forms.gle/U4FFcrsNWCf559sV9'}
              target={'_blank'}
              size="small"
            >
              Apply to exhibit
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box marginY={1} display="flex" alignItems={'center'} justifyContent={'center'} width={'100%'}>
        <Box marginRight={2}>
          <IconButton component={'a'} href={'https://twitter.com/DigitechMilan'} target={'blank'}>
            <TwitterIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box marginRight={2}>
          <IconButton component={'a'} href={'https://linkedin.com/company/digitechmilan/'} target={'blank'}>
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box marginRight={2}>
          <IconButton component={'a'} href={'https://facebook.com/digitechexpomilan'} target={'blank'}>
            <FacebookIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box>
          <IconButton component={'a'} href={'https://www.instagram.com/digitech.milan/'} target={'blank'}>
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'} justifyContent={'center'} marginBottom={2}>
        <Link
          component="a"
          href="mailto:info@digitechmilan.com"
          color="primary"
          variant={'subtitle2'}
        >
          info@digitechmilan.com
        </Link>
      </Box>
      <Box display="flex" alignItems={'center'} justifyContent={'center'} marginBottom={2}>
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
      <Typography align={'center'} variant={'subtitle2'} color="textSecondary" gutterBottom>
        &copy; DigiTech Milan. 2021. All rights reserved
      </Typography>
      <Typography align={'center'} variant={'caption'} color="textSecondary" component={'p'}>
      When you visit or interact with our sites, services or tools, we or our authorised service providers may use <strong><a href="/cookies">cookies</a></strong> for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
      </Typography>
    </Grid>
  </Grid>
  
);

export default Footer;
