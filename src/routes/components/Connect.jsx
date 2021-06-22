import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

import {
  facebook,
  github,
  instagram,
  linkedin,
} from '../../social-media';

const socialMediaLinks = [
  {
    name: 'Facebook',
    imgUrl: './social_media_logos/Facebook.png',
    profileUrl: facebook,
  },
  {
    name: 'GitHub',
    imgUrl: './social_media_logos/GitHub.png',
    profileUrl: github,
  },
  {
    name: 'Instagram',
    imgUrl: './social_media_logos/Instagram.png',
    profileUrl: instagram,
  },
  {
    name: 'LinkedIn',
    imgUrl: './social_media_logos/LinkedIn.png',
    profileUrl: linkedin,
  },
];

const useStyles = makeStyles(() => ({
  connect: {
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

function Connect() {
  const classes = useStyles();
  return (
    <div className={classes.connect}>
      <Typography variant="h5">Want to learn more?</Typography>
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

export default Connect;
