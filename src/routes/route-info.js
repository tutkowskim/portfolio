import PlaceHolder from './PlaceHolder';

export const routeInfo = [
  {
    name: 'Work',
    path: '/work',
    showInNavMenu: true,
    component: PlaceHolder,
  },
  {
    name: 'About',
    path: '/about',
    showInNavMenu: true,
    component: PlaceHolder,
  },
  {
    name: 'Connect',
    path: '/connect',
    showInNavMenu: true,
    component: PlaceHolder,
  },
];

export const defaultRoute = routeInfo[0];
