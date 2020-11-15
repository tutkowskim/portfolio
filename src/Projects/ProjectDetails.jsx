import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ProjectData from './ProjectData.json';

const useStyles = makeStyles(() => ({
  projectNotFound: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  projectsTitle: {
    textAlign: 'center',
    padding: '10px',
  },
  section: {
    padding: '5px',
  },
}));

function Projects(props) {
  const classes = useStyles();

  const requestedProjectName = props.match.params.name;
  const project = ProjectData.find(project => project.name === requestedProjectName);
  if (!project) {
    return (
      <div className={classes.projectNotFound}>
        <Typography variant="h4" className={classes.projectsTitle}>{ `${requestedProjectName} not found` }</Typography>
      </div>
    );
  }

  const viewProject = () => window.open(project.productionUrl, '_blank');
  const viewSource = () => window.open(project.projectUrl, '_blank');

  return (
    <>
      <Typography variant="h4" className={classes.projectsTitle}>{ project.name }</Typography>

      <div className={classes.section}>
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          <img src={project.coverImageUrl}></img>
          <img src={project.coverImageUrl}></img>
          <img src={project.coverImageUrl}></img>
          <img src={project.coverImageUrl}></img>
          <img src={project.coverImageUrl}></img>
        </Carousel>
      </div>

      <div className={classes.section}>
        <Typography variant="h6">About</Typography>
        <Typography variant="body1" className={classes.generalSectionDescription}>Add a detailed description here</Typography>
      </div>

      <div className={classes.section}>
        <Typography variant="h6">Technology Stack</Typography>
        <ul>
          { project.technologies.map((technology) => <li key={technology}><Typography variant="body1">{technology}</Typography></li>) }
        </ul>
      </div>

      <div>
        <Typography variant="h6">Links</Typography>
        { project.productionUrl && <div><Button color="primary" onClick={viewProject}>View Project</Button></div> }
        { project.projectUrl && <div><Button color="primary" onClick={viewSource}>View Source</Button></div> }
      </div>
    </>
  );
}

export default Projects;
