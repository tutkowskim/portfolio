import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  contactMe: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  socialMediaList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap", 
  },
  socialMediaListItem: {
    padding: "5px",
  },
  iconWrapper: {
    verticalAlign: "middle",
  },
  social_media_bar__facebook: {
    padding: "5px 5px 0px 5px",
    backgroundColor: "#3b5998",
    fontSize: "72px",
  },
  social_media_bar__github: {
    padding: "5px 5px 0px 5px",
    backgroundColor: "#24292e",
    fontSize: "72px",
  },
  social_media_bar__linkedin: {
    padding: "5px 5px 0px 5px",
    backgroundColor: "#0073b1",
    fontSize: "72px",
  },
  social_media_bar__instagram: {
    padding: "5px 5px 0px 5px",
    background: "radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)",
    fontSize: "72px",
  },
}));

function ContactMe() {
  const classes = useStyles();
  return (
    <div className={classes.contactMe}>
      <Typography variant="h4">Contact Me</Typography>
      <div className={classes.socialMediaList}>
        <div className={classes.socialMediaListItem}>
          <a className={classes.social_media_bar__facebook} target="_blank"  rel="noopener noreferrer"href="https://www.facebook.com/tutkowski.mark">
            <span className={classes.iconWrapper}><FacebookIcon style={{ color: "white", fontSize: 72 }} /></span>
          </a>
        </div>
        <div className={classes.socialMediaListItem}>
          <a className={classes.social_media_bar__github} target="_blank" rel="noopener noreferrer" href="https://github.com/tutkowskim">
            <span className={classes.iconWrapper}><GitHub style={{ color: "white", fontSize: 72 }} /></span>
          </a>
        </div>
        <div className={classes.socialMediaListItem}>
          <a className={classes.social_media_bar__linkedin} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marktutkowski/">
            <span className={classes.iconWrapper}><LinkedIn style={{ color: "white", fontSize: 72 }} /></span>
          </a>
        </div>
        <div className={classes.socialMediaListItem}>
          <a className={classes.social_media_bar__instagram} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tutkowski/">
            <span className={classes.iconWrapper}><Instagram style={{ color: "white", fontSize: 72 }} /></span>
          </a>
        </div>
      </div>
      <Typography variant="subtitle2">Feel free to reach out to me on my social media accounts.</Typography>
    </div>
  )
}

export default ContactMe;