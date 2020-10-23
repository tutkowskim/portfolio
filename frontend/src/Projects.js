import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ProjectCard from './ProjectCard';

const PROJECTS = gql`
  query Projects {
    projects {
      name
      description
      coverImageUrl
      projectUrl
    }
  }
`;

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
  const { loading, error,  data } = useQuery(PROJECTS);
  console.log(loading, error, data);

  return (
    <div className={classes.projects}>
      <Typography variant='h4' className={classes.projectsTitle}>Projects</Typography>
      <Grid container justify='center' alignItems='center' spacing={3}>
        { loading ? <CircularProgress /> : !error && data.projects.map(project => <Grid item><ProjectCard {...project} /></Grid>  ) }
      </Grid>
    </div>
  )
}

export default Projects;