import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Container, makeStyles } from '@material-ui/core';
import GoogleAnalytics from './GoogleAnalytics';
import { defaultRoute, routeInfo } from './routes';

const useStyles = makeStyles(() => ({
  routerOutlet: {
    flexGrow: 1,
    flexShrink: 1,
  },
}));

function RouterOutlet() {
  const classes = useStyles();
  return (
    <Container className={classes.routerOutlet} maxWidth="lg">
      <Switch>
        { routeInfo.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
        <Route exact path="/" render={() => <Redirect to={defaultRoute.path} />} />
        <Redirect from="*" to="/" />
      </Switch>
      <GoogleAnalytics />
    </Container>
  );
}

export default RouterOutlet;
