import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getProjectRoute } from './ProjectDetailsRouteInfo';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
  description: {
    height: 30,
  },
});

function ProjectCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const {
    name, coverImageUrl, description, productionUrl,
  } = props;

  const openProject = () => history.push(getProjectRoute(name));
  const viewProject = () => window.open(productionUrl, '_blank');

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openProject}>
        <CardMedia className={classes.media} image={coverImageUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        { productionUrl ? <Button size="small" color="primary" onClick={viewProject}>View</Button> : <></> }
        <Button size="small" color="primary" onClick={openProject}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productionUrl: PropTypes.string,
};

ProjectCard.defaultProps = {
  productionUrl: null,
};

export default ProjectCard;