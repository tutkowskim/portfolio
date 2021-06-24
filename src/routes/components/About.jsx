import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

const placeHolderTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  aboutMe: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  profilePictureContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  profilePicture: {
    width: '384px',
    height: '288px',
  },
  aboutMeContent: {
    paddingLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0rem',
      paddingTop: '2rem',
    },
  },
  viewResumeButton: {
    marginTop: '1rem',
  },
  credentials: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '3rem',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  credential: {
    marginBottom: '.5rem',
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.aboutMe}>
        <div className={classes.profilePictureContainer}>
          <img className={classes.profilePicture} src="/mark-tutkowski.jpg" alt="Mark Tutkowski" />
        </div>
        <div className={classes.aboutMeContent}>
          <Typography variant="body1">{placeHolderTest}</Typography>
          <a href="https://www.resume.tutkowski.com">
            <Button className={classes.viewResumeButton} variant="contained">View Resume</Button>
          </a>
        </div>
      </div>
      <div className={classes.credentials}>
        <div className={classes.credentialBox}>
          <Typography variant="h5">Education</Typography>
          <div className={classes.credential}>
            <Typography variant="body1">Bachelor&apos;s of Science in Computer Engineering</Typography>
            <Typography variant="body2">Milwaukee School of Engineering</Typography>
            <Typography variant="caption">2011-2015</Typography>
          </div>
        </div>
        <div className={classes.credentialBox}>
          <Typography variant="h5">Work Experience</Typography>
          <div className={classes.credential}>
            <Typography variant="body1">Software Engineer</Typography>
            <Typography variant="body2">Northwestern Mutual</Typography>
            <Typography variant="caption">Apr 2021 - Present</Typography>
          </div>
          <div className={classes.credential}>
            <Typography variant="body1">Software Engineer</Typography>
            <Typography variant="body2">Rockwell Automation</Typography>
            <Typography variant="caption">May 2012 - Apr 2021</Typography>
          </div>
        </div>
        <div className={classes.credentialBox}>
          <Typography variant="h5">Awards</Typography>
          <div className={classes.credential}>
            <Typography variant="body1">Innovation Award</Typography>
            <Typography variant="body2">Rockwell Automation</Typography>
            <Typography variant="caption">October 2020</Typography>
          </div>
          <div className={classes.credential}>
            <Typography variant="body1">Innovation Award</Typography>
            <Typography variant="body2">Rockwell Automation</Typography>
            <Typography variant="caption">October 2017</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
