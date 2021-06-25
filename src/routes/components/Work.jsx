import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import ProjectCell from './ProjectCell';

import { projectInfo } from '../project-info';

const personalBrandStatement = 'Exploring new technologies and methodologies to create a better tomorrow. 🤔';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  personalBrandStatement: {
    textAlign: 'center',
    maxWidth: '50rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  projectGrid: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(3, 18rem)',
    gridTemplateRows: 'repeat(3, 18rem)',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 18rem)',
      gridTemplateRows: 'repeat(5, 18rem)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 18rem)',
      gridTemplateRows: 'repeat(9, 18rem)',
    },
  },
}));

function Work() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.personalBrandStatement} variant="h4">
        {personalBrandStatement}
      </Typography>
      <div className={classes.projectGrid}>
        {projectInfo.map((project) => (
          <ProjectCell
            key={project.path}
            name={project.name}
            path={project.path}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
