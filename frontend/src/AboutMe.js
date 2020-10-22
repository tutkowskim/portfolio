import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { ContactMePage, ProjectsPage } from './Pages';

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.aboutMe}>
      <Typography variant="h6" >Hello, my name is Mark Tutkowski.</Typography>
      <Typography variant="subtitle1" >I'm a Full Stack Software Enginner with a passion for web & mobile development.</Typography>
      <Typography variant="subtitle1" >Feel free to check out some of my <Link to={ProjectsPage.route}>projects</Link> or <Link to={ContactMePage.route}>connect</Link>!</Typography>
    </div>
  )
}

export default AboutMe;