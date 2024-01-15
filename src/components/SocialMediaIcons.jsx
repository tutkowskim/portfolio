import React from 'react';
import { Box, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';

function SocialMediaIcons({
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  githubUrl,
}) {
  const openLink = (link) => { window.location = link; };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton onClick={() => openLink(facebookUrl)}><FacebookIcon /></IconButton>
      <Divider orientation="vertical" sx={{ height: '70%' }} />
      <IconButton onClick={() => openLink(instagramUrl)}><InstagramIcon /></IconButton>
      <Divider orientation="vertical" sx={{ height: '70%' }} />
      <IconButton onClick={() => openLink(linkedInUrl)}><LinkedInIcon /></IconButton>
      <Divider orientation="vertical" sx={{ height: '70%' }} />
      <IconButton onClick={() => openLink(githubUrl)}><GitHubIcon /></IconButton>
    </Box>
  );
}

SocialMediaIcons.propTypes = {
  facebookUrl: PropTypes.string.isRequired,
  instagramUrl: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

export default SocialMediaIcons;
