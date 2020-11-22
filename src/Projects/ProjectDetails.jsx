import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
  imgCarousel: {
    maxWidth: '500px',
    margin: 'auto',
  },
}));

function Projects(props) {
  const classes = useStyles();

  const { match } = props;
  const requestedProjectName = match.params.name;
  const project = ProjectData.find((p) => p.name === requestedProjectName);
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
        <Carousel className={classes.imgCarousel} showArrows showStatus={false} showThumbs={false}>
          { project.carouselImages.map((image) => <div key={image}><img alt="" src={image} /></div>) }
        </Carousel>
      </div>

      <div className={classes.section}>
        <Typography variant="h6">About</Typography>
        <Typography variant="body1">{ project.detailedDescription }</Typography>
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

Projects.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Projects;
