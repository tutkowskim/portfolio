import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
  description: {
    height: 30,
  }
});

function ProjectCard(props) {
  const classes = useStyles();
  const { title, coverImageUrl, description, projectUrl } = props;
  const openProject = () => window.open(projectUrl, '_blank');

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openProject}>
        <CardMedia className={classes.media} image={coverImageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={openProject}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;