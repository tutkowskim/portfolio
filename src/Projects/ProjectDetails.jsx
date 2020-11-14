import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

function Projects(props) {
  const classes = useStyles();
  
  const requestedProjectName = props.match.params.name;
  const project = ProjectData.find(project => project.name === requestedProjectName);
  if (!project) {
    return (
      <div className={classes.projects}>
        <Typography variant="h4" className={classes.projectsTitle}>{ `${requestedProjectName} not found` }</Typography>
      </div>
    );
  }

  return (
    <div className={classes.projects}>
      { JSON.stringify(project) }
    </div>
  );
}

export default Projects;
