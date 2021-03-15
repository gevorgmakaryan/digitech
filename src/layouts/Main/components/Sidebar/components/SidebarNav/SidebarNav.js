import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const SidebarNav = ({ onClose }) => {
  return (
    <Box>
      <Box display={'flex'} justifyContent={'flex-end'} onClick={() => onClose()}>
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box display="flex" alignItems={'center'} flexDirection={'column'}>
          <Box>
            <Link
              component="a"
              href="https://forms.gle/V2NDV914invuTWrn6"
              target={'_blank'}
              color="textPrimary"
            >
              Speaker registration
            </Link>
          </Box>
          <Box marginY={2}>
            <Link
              component="a"
              href="/attend"
              color="textPrimary"
            >
              Apply to attend
            </Link>
          </Box>
          <Box>
            <Link
              component="a"
              href="/exhibit"
              color="textPrimary"
            >
              Apply to exhibit
            </Link>
          </Box>
        </Box>
        <Box marginY={2} display="flex" alignItems={'center'} justifyContent={'center'}>
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
        <Box display="flex" alignItems={'center'} justifyContent={'space-around'}>
          <Box>
            <Link
              component="a"
              href="/privacy"
              color="textSecondary"
            >
              Privacy Policy
            </Link>
          </Box>
          <Box>
            <Link
              component="a"
              href="/cookies"
              color="textSecondary"
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  onClose: PropTypes.func,
};

export default SidebarNav;
