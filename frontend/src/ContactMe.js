import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const socialMediaLinks = [
  { 
    name: 'Facebook',
    imgUrl: './SocialMediaLogos/Facebook.png',
    profileUrl: 'https://www.facebook.com/tutkowski.mark',
  },
  { 
    name: 'GitHub',
    imgUrl: './SocialMediaLogos/GitHub.png',
    profileUrl: 'https://github.com/tutkowskim',
  },
  { 
    name: 'Instagram',
    imgUrl: './SocialMediaLogos/Instagram.png',
    profileUrl: 'https://www.instagram.com/tutkowski',
  },
  { 
    name: 'LinkedIn',
    imgUrl: './SocialMediaLogos/LinkedIn.png',
    profileUrl: 'https://www.linkedin.com/in/marktutkowski',
  },
];

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
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
}));

function ContactMe() {
  const classes = useStyles();
  return (
    <div className={classes.contactMe}>
      <Typography variant="h4">Contact Me</Typography>
      <div className={classes.socialMediaList}>
        { socialMediaLinks.map(socialMediaLink =>
          <a key={socialMediaLink.name} className={classes.socialMediaListItem} target="_blank" rel="noopener noreferrer" href={socialMediaLink.profileUrl}>
            <img height="72px" src={socialMediaLink.imgUrl} alt={socialMediaLink.name} title={socialMediaLink.name} />
          </a>
        )}
      </div>
      <Typography variant="subtitle2">Feel free to reach out to me on my social media accounts.</Typography>
    </div>
  )
}

export default ContactMe;