import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'
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
    <div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {ProjectData.map(project => (
          <div style={{ display: 'flex' }}>
            <img height="105" width="258.75" src={project.coverImageUrl} />
            <div>
              <Typography variant="h5">{project.name}</Typography>
              <Typography variant="body1">{project.description}</Typography>
              {project.technologies.map(tech => (
                <Chip variant="outlined" size="small" label={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
