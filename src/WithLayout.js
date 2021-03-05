import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

export default function WithLayout({ component: Component, layout: Layout, ...rest }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <ThemeProvider theme={getTheme()}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        <Layout>
          <Component {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}

WithLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  layout: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};