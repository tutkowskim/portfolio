import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Paper,
  Chip,
  Typography,
  makeStyles,
} from '@material-ui/core';

import ProjectData from './ProjectData.json';
import { getProjectRoute } from './ProjectDetailsRouteInfo';

const useStyles = makeStyles((theme) => ({
  projects: {
    display: 'flex',
    flexDirection: 'column',
  },
  project: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    '&:hover': {
      background: theme.palette.text.secondary,
    },
  },
  projectImage: {
    margin: '10px',
    height: '105px',
    width: '258.75px',
  },
  projectText: {
    margin: '10px',
  },
  chip: {
    marginLeft: '5px',
    marginBottom: '5px',
  },
}));

function Projects() {
  const classes = useStyles();
  const history = useHistory();
  const navigateToProject = (project) => history.push(getProjectRoute(project.name));
  const handleKeyPress = (event, project) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      navigateToProject(project);
    }
  };

  return (
    <div className={classes.projects}>
      {ProjectData.map((project) => (
        <Paper
          key={project.name}
          className={classes.project}
          onClick={() => navigateToProject(project)}
          onKeyPress={(event) => handleKeyPress(event, project)}
        >
          <img className={classes.projectImage} src={project.coverImageUrl} alt={project.name} />
          <div>
            <Typography className={classes.projectText} variant="h5">{project.name}</Typography>
            <Typography className={classes.projectText} variant="body1">{project.description}</Typography>
            {project.technologies.map((tech) => (
              <Chip key={tech} className={classes.chip} variant="outlined" size="small" label={tech} />
            ))}
          </div>
        </Paper>
      ))}
    </div>
  );
}

export default Projects;
