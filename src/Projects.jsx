import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData.json';

const useStyles = makeStyles(() => ({
  projects: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  projectsTitle: {
    textAlign: 'center',
    padding: '10px',
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.projects}>
      <Typography variant="h4" className={classes.projectsTitle}>Projects</Typography>
      <Grid container justify="center" alignItems="center" spacing={3}>
        { ProjectData.map((project) => <Grid key={project.name} item><ProjectCard {...project} /></Grid>) }
      </Grid>
    </div>
  );
}

export default Projects;
