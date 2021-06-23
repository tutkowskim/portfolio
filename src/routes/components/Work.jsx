import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import ProjectCell from './ProjectCell';

import { projectInfo } from '../project-info';

const personalBrandStatement = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam odio mi, scelerisque gravida tellus elementum ac. Nam quis dictum augue.';

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
    gridTemplateColumns: 'repeat(3, minmax(300px, 300px))',
    gridTemplateRows: 'repeat(3, minmax(300px, 300px))',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 300px)',
      gridTemplateRows: 'repeat(5, 300px)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 300px)',
      gridTemplateRows: 'repeat(9, 300px)',
    },
  },
}));

function Work() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.personalBrandStatement} variant="h5">{personalBrandStatement}</Typography>
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
