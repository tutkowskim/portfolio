import {
  About,
  Connect,
  Work,
} from './components';

import { projectInfo } from './project-info';

export const routeInfo = [
  {
    name: 'Work',
    path: '/work',
    showInNavMenu: true,
    component: Work,
  },
  {
    name: 'About',
    path: '/about',
    showInNavMenu: true,
    component: About,
  },
  {
    name: 'Connect',
    path: '/connect',
    showInNavMenu: true,
    component: Connect,
  },
  ...projectInfo,
];

export const defaultRoute = routeInfo[0];
