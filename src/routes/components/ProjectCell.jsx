import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  projectCell: {
    position: 'relative',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    opacity: 0.7,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  projectName: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.primary.contrastText,
  },
}));

function ProjectCell({ name, imageSrc, path }) {
  const classes = useStyles();
  const history = useHistory();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNavigate = () => history.push(path);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleNavigate();
    }
  };

  return (
    <Paper
      role="button"
      tabIndex={0}
      className={classes.projectCell}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      onClick={handleNavigate}
      onKeyPress={handleKeyPress}
    >
      <img width="100%" height="100%" src={imageSrc} alt={name} />
      {showOverlay && (
      <div className={classes.overlay}>
        <Typography className={classes.projectName} variant="h5">{name}</Typography>
      </div>
      )}
    </Paper>
  );
}

ProjectCell.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ProjectCell;
