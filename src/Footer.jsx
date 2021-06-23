import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from '@material-ui/icons';
import {
  facebook,
  github,
  instagram,
  linkedin,
} from './social-media';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '2rem',
    paddingBottom: '1rem',
  },
  copyright: {
    flexGrow: 1,
  },
  socialMediaIcon: {
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography className={classes.copyright} variant="body2">&copy; Mark Tutkowski 2021</Typography>
      <a className={classes.socialMediaIcon} target="_blank" rel="noopener noreferrer" href={facebook} aria-label="Facebook"><Facebook style={{ fontSize: 24 }} /></a>
      <a className={classes.socialMediaIcon} target="_blank" rel="noopener noreferrer" href={github} aria-label="GitHub"><GitHub style={{ fontSize: 22 }} /></a>
      <a className={classes.socialMediaIcon} target="_blank" rel="noopener noreferrer" href={instagram} aria-label="Instagram"><Instagram style={{ fontSize: 24 }} /></a>
      <a className={classes.socialMediaIcon} target="_blank" rel="noopener noreferrer" href={linkedin} aria-label="LinkedIn"><LinkedIn style={{ fontSize: 24 }} /></a>
    </Container>
  );
}

export default Footer;
