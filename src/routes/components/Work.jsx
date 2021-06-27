import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Link, makeStyles } from '@material-ui/core';

import { connect, getProjectRoute } from '../route-paths';
import ProjectCell from './ProjectCell';
import useProjectData from './useProjectData';

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */

const useStyles = (projectCount) => makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    maxWidth: '56rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2rem',
    gap: '2rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '36rem',
    },
  },
  greeting: {
    opacity: 0.5,
  },
  projectGrid: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(3, 18rem)',
    gridTemplateRows: `repeat(${Math.ceil(projectCount / 3)}, 18rem)`,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 18rem)',
      gridTemplateRows: `repeat(${Math.ceil(projectCount / 2)}, 18rem)`,
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 18rem)',
      gridTemplateRows: `repeat(${projectCount}, 18rem)`,
    },
  },
}))();

function Work() {
  const history = useHistory();
  const projectData = useProjectData();
  const classes = useStyles(projectData.length);

  return (
    <div className={classes.container}>
      <Typography className={classes.greeting} variant="h4">Hi there!</Typography>
      <Typography variant="h5">
        I&apos;m Mark, a Software Engineer with projects spanning across embedded, desktop, mobile, and web platforms.
        {' '}
        Check out some of my projects below or feel free to
        {' '}
        <Link color="secondary" onClick={() => history.push(connect)}>connect</Link>
        !
      </Typography>
      <div className={classes.projectGrid}>
        {projectData.map((project) => (
          <ProjectCell
            key={project.name}
            name={project.name}
            path={getProjectRoute(project.name)}
            imageSrc={project.coverImageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
