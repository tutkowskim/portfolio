import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Typography,
} from '@mui/material';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useTypeWriterEffect from '../hooks/useTypeWriterEffect';

const into = "Hello, I'm Mark Tutkowski";
const description = "I'm a Full-Stack Developer based in San Francisco with over 9 years of professional experience.";

const titles = [
  'Full-Stack Engineer',
  'Web Developer',
  'Frontend Engineer',
  'Backend Engineer',
  'Web Developer',
  'iOS Developer',
];

function HomeSection() {
  const title = useTypeWriterEffect(titles);
  const showResume = () => { window.location = 'https://resume.tutkowski.com'; };

  return (
    <Box sx={{ minHeight: 630, height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' } }}>
      <Box sx={{
        height: '100%',
        maxWidth: 550,
        margin: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      >
        <Avatar sx={{ height: { xs: 200, sm: 245 }, width: { xs: 200, sm: 245 } }} src="/profile-picture-min.jpeg" />
        <Typography variant="h5">{into}</Typography>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <SocialMediaIcons
          facebookUrl="https://www.facebook.com/profile.php?id=100090190470875"
          instagramUrl="https://www.instagram.com/tutkowskim/"
          linkedInUrl="https://www.linkedin.com/in/marktutkowski/"
          githubUrl="https://github.com/tutkowskim"
        />
        <Button variant="outlined" onClick={() => showResume()}>Download CV</Button>
      </Box>
    </Box>
  );
}

export default HomeSection;
