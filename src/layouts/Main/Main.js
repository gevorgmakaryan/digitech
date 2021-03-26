import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import { Topbar, Sidebar, Footer } from './components';
import Container from 'common/Container';

const Main = ({ children }) => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div>
      <AppBar
        position={'static'}
        sx={{
          backgroundColor: theme.palette.background.dark,
        }}
        elevation={1}
      >
        <Container paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
      />
      <main>
        <Divider />
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
