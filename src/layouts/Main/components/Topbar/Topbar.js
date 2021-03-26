import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              color: theme.palette.common.white,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box display={'flex'} alignItems="baseline" component="a" underline="none" href="/" title="DigiTech Milan" height={{ xs: 20, sm: 24, md: 26 }}>
          <Box
            component="img"
            height={'100%'}
            src={'/assets/logos/logo--negative.svg'}
            alt="DigiTech Milan"
          />
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Hidden mdDown>
          <Box>
            <Link
              underline="none"
              component="a"
              href="https://forms.gle/V2NDV914invuTWrn6"
              target={'_blank'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Speaker registration
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="https://forms.gle/dR3yTYJ8MepyTjwX8"
              target={'_blank'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Apply to attend
            </Link>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href={'https://forms.gle/U4FFcrsNWCf559sV9'}
              target={'_blank'}
              size="large"
            >
              Apply to exhibit
            </Button>
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
