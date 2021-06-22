import {
  About,
  Connect,
  Work,
} from './components';

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
];

export const defaultRoute = routeInfo[0];
