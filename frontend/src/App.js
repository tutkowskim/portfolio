import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuIcon from '@material-ui/icons/Menu';

import { Pages } from './Pages';
import useLocalStorage from './useLocalStorage';
import useWindowSize from './useWindowSize';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  drawerList: {
    width: "250px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appContent: {
    flexGrow: 1,
  },
}));

function DarkModeToggleButton(props) {
  const { isDarkMode, onToggleDarkMode } = props;
  return (
    <IconButton edge="start" color="inherit" onClick={onToggleDarkMode}>
      { isDarkMode ? <Brightness4Icon /> : <Brightness7Icon /> }
    </IconButton>
  );
}

function ThemedApp(props) {
  const { isDarkMode, toggleDarkMode } = props;

  const classes = useStyles();
  const history = useHistory();
  const windowSize = useWindowSize();

  const [showDrawer, setShowDrawer] = React.useState(false);
  const changePage = (route) => {
    history.push(route);
    setShowDrawer(false);
  }

  return (
    <div className={classes.app}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Mark Tutkowski</Typography>
          {windowSize.width > 600 ? <>
            { Pages.map(page => <Button key={page.name} className={classes.menuButton} color="inherit" onClick={ () => changePage(page.route) }>{page.name}</Button>) }
            <DarkModeToggleButton isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
          </> : <>
            <DarkModeToggleButton isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => setShowDrawer(!showDrawer)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={showDrawer} onClose={() => setShowDrawer(false)}>
              <List className={classes.drawerList}>
                { Pages.map(page => <ListItem button key={page.name} onClick={ () => changePage(page.route) }><ListItemText primary={page.name} /></ListItem>) }
              </List>
            </Drawer>
          </>}
        </Toolbar>
      </AppBar>
      <Container className={classes.appContent} maxWidth="md">
        <Switch>
          { Pages.map(page => <Route key={page.route} path={page.route} component={page.component} exact />) }
          <Redirect from='*' to='/' />
        </Switch>
      </Container>
    </div>
  );
}

function App() {
  const [prefersDarkMode, setPrefersDarkMode] = useLocalStorage('prefersDarkMode', true);
  const toggleDarkMode = () => setPrefersDarkMode(!prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ThemedApp isDarkMode={prefersDarkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

export default App;
