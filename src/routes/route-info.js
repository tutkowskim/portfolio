import {
  About,
  Connect,
  Work,
  Project,
} from './components';

import {
  about,
  connect,
  work,
  project,
} from './route-paths';

export const routeInfo = [
  {
    name: 'Work',
    path: work,
    showInNavMenu: true,
    component: Work,
  },
  {
    name: 'About',
    path: about,
    showInNavMenu: true,
    component: About,
  },
  {
    name: 'Connect',
    path: connect,
    showInNavMenu: true,
    component: Connect,
  },
  {
    path: project,
    component: Project,
  },
];

export const defaultRoute = routeInfo[0];
