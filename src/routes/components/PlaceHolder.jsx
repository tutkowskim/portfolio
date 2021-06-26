import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '1rem',
  },
}));

function Connect() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4">Project is under construction</Typography>
      <Typography>
        Thank you for your interest in this project.
        {' '}
        I&apos;m busying creating content for this site, so please check again later.
      </Typography>
    </div>
  );
}

export default Connect;
