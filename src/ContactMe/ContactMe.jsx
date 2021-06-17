import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const socialMediaLinks = [
  {
    name: 'Facebook',
    imgUrl: './social_media_logos/Facebook.png',
    profileUrl: 'https://www.facebook.com/tutkowski.mark',
  },
  {
    name: 'GitHub',
    imgUrl: './social_media_logos/GitHub.png',
    profileUrl: 'https://github.com/tutkowskim',
  },
  {
    name: 'Instagram',
    imgUrl: './social_media_logos/Instagram.png',
    profileUrl: 'https://www.instagram.com/tutkowski',
  },
  {
    name: 'LinkedIn',
    imgUrl: './social_media_logos/LinkedIn.png',
    profileUrl: 'https://www.linkedin.com/in/marktutkowski',
  },
];

const useStyles = makeStyles(() => ({
  contactMe: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  socialMediaList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  socialMediaListItem: {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  socialMediaIcon: {
    height: '72px',
  },
}));

function ContactMe() {
  const classes = useStyles();
  return (
    <div className={classes.contactMe}>
      <div className={classes.socialMediaList}>
        { socialMediaLinks.map((socialMediaLink) => (
          <a key={socialMediaLink.name} className={classes.socialMediaListItem} target="_blank" rel="noopener noreferrer" href={socialMediaLink.profileUrl}>
            <img
              className={classes.socialMediaIcon}
              src={socialMediaLink.imgUrl}
              alt={socialMediaLink.name}
              title={socialMediaLink.name}
            />
          </a>
        ))}
      </div>
      <Typography variant="subtitle2">Feel free to reach out to me on my social media accounts.</Typography>
    </div>
  );
}

export default ContactMe;