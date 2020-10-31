import React from 'react';
import { useHistory } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ContactMeRouteInfo from './ContactMeRouteInfo';
import ProjectsRouteInfo from './ProjectsRouteInfo';

const useStyles = makeStyles(() => ({
  aboutMe: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

function AboutMe() {
  const classes = useStyles();
  const history = useHistory();
  const openProjectsPage = () => history.push(ProjectsRouteInfo.route);
  const openContactMePage = () => history.push(ContactMeRouteInfo.route);

  /* eslint-disable jsx-a11y/anchor-is-valid */
  /* we are using the material-ui link and not the router link */
  return (
    <div className={classes.aboutMe}>
      <Typography variant="h6">Hello, my name is Mark Tutkowski.</Typography>
      <Typography variant="subtitle1">I&apos;m a Full Stack Software Enginner with a passion for web & mobile development.</Typography>
      <Typography variant="subtitle1">
        Feel free to check out some of my
        <Link href="#" onClick={openProjectsPage}> projects</Link>
        {' '}
        or
        <Link href="#" onClick={openContactMePage}> connect</Link>
        !
      </Typography>
    </div>
  );
}

export default AboutMe;
