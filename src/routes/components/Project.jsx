import React from 'react';
import { useParams } from "react-router-dom";
import { Typography, makeStyles } from '@material-ui/core';
import useProjectMarkdown from './useProjectMarkdown';

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
  const { projectName } = useParams();
  const markdown = useProjectMarkdown(projectName)
  return (
    <div className={classes.container}>
      <Typography>{markdown}</Typography>
    </div>
  );
}

export default Connect;
