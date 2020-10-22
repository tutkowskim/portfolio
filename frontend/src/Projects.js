import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ProjectCard from './ProjectCard';

const getPlaceHolderImage = () => {
  switch(Math.floor(Math.random() * Math.floor(3))) {
    case 0: return 'https://place-puppy.com/200x200';
    case 1: return 'https://place-puppy.com/400x300';
    default: return 'http://placekitten.com/g/350/150';
  }
}

const PROJECT_DATA = [
  {
    title: 'Portfolio',
    description: 'A portfolio of my personal projects.',
    coverImageUrl: getPlaceHolderImage(),
    projectUrl: 'https://github.com/tutkowskim/portfolio',
  },
  {
    title: 'Kopps Flavor Forecast API',
    description: 'An api to query the custard flavor forecast at the Kopps resturants around Milwaukee.',
    coverImageUrl: getPlaceHolderImage(),
    projectUrl: 'https://github.com/tutkowskim/kopps-flavor-forcast-api',
  },
];

const useStyles = makeStyles((theme) => ({
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
      <Typography variant='h4' className={classes.projectsTitle}>Projects</Typography>
      <Grid container justify='center' alignItems='center' spacing={3}>
        { PROJECT_DATA.map(project => <Grid item><ProjectCard {...project} /></Grid>  ) }
      </Grid>
    </div>
  )
}

export default Projects;