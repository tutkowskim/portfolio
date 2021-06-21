import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Container , makeStyles } from '@material-ui/core';
import { defaultRoute, routeInfo } from './routes'

const useStyles = makeStyles(() => ({
  routerOutlet: {
    flexBasis: 'calc(100% - 64px)',
    flexGrow: 1,
    flexShrink: 1,
  },
}));

function RouterOutlet() {
  const classes = useStyles();
  return (
    <Container className={classes.routerOutlet} maxWidth="lg">
      <Switch>
        { routeInfo.map((page) => (
          <Route
            key={page.route}
            path={page.route}
            component={page.component}
            exact
          />
        ))}
        
        <Route exact path="/" render={() => <Redirect to={defaultRoute.path} />}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
  );
}

export default RouterOutlet;