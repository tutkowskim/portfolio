import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  AppBar,
  Button,
  Container,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import MenuIcon from '@material-ui/icons/Menu';

import { routeInfo } from './routes';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    height: '64px',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  drawerList: {
    width: '250px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar({ width }) {
  const visibleRoutes = routeInfo.filter((route) => route.showInNavMenu);

  const classes = useStyles();
  const history = useHistory();

  const [showDrawer, setShowDrawer] = React.useState(false);
  const changePage = (route) => {
    history.push(route);
    setShowDrawer(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>Mark Tutkowski</Typography>
          {isWidthUp('sm', width) ? (
            <>
              { visibleRoutes.map((route) => <Button key={route.name} className={classes.menuButton} color="inherit" onClick={() => changePage(route.path)}>{route.name}</Button>) }
            </>
          ) : (
            <>
              <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => setShowDrawer(!showDrawer)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={showDrawer} onClose={() => setShowDrawer(false)}>
                <List className={classes.drawerList}>
                  { visibleRoutes.map((route) => (
                    <ListItem button key={route.name} onClick={() => changePage(route.path)}>
                      <ListItemText primary={route.name} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

NavBar.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(NavBar);
