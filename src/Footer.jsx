import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography variant="body2">&copy; Mark Tutkowski 2021</Typography>
    </Container>
  )
}

export default Footer;
