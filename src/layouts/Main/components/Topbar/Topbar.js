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
        <Box display={'flex'} alignItems="baseline" component="a" underline="none" href="/" title="webbee" height={{ xs: 28, md: 32 }}>
          <Box
            component="img"
            height={'100%'}
            src={'/assets/logos/webbee.svg'}
            alt="webbee"
          />
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Hidden mdDown>
          <Box>
            <Link
              underline="none"
              component="a"
              href="/"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              View all pages
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/docs-introduction"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Documentation
            </Link>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/the-front-landing-page/"
              size="large"
            >
              Purchase now
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
