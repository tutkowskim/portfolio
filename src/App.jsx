import React from 'react';

import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';

import theme from './theme';
import NavBar from './NavBar';
import RouterOutlet from './RouterOutlet';
import Footer from './Footer'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <NavBar />
        <RouterOutlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
