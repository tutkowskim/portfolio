import React from 'react';
import { BreakPoints, useBreakpoints } from './useBreakpoints';

const intro = 'I\'m Mark, a Software Engineer with projects spanning across embedded, desktop, mobile, and web platforms. Check out some of my projects below or feel free to connect!';
const backStory = 'I first got started in software during high school when I joined our FIRST Robotics team where we created robots to complete in various games announced each year (one of which was a modification of soccer). This lead me to get my degree in Computer Engineering from MSOE and eventually join the workforce as a Software Engineer. Over the course of my professional career and personal projects I\'ve had the opportunity to work on projects across multiple domains which include embedded, desktop, mobile, and web applications. While working on these projects I was always interested in continuously learning to improve myself and the product which lead me to go back to school for a masters in computer science.';

function AboutSection() {
  const breakPoint = useBreakpoints();
  return (
    <>
      <h3>Hey There!</h3>
      {breakPoint === BreakPoints.SMALL
        ? (
          <div>
            <p>{intro}</p>
            <img src="/profile-picture.jpeg" alt="profile" height="250px" style={{ display: 'block', margin: 'auto', padding: '10px' }} />
            <p>{backStory}</p>
          </div>
        ) : (
          <div style={{ display: 'inline-block' }}>
            <img src="/profile-picture.jpeg" alt="profile" height="250px" style={{ float: 'left', marginRight: '10px' }} />
            <div>
              <p>{intro}</p>
              <br />
              <p>{backStory}</p>
            </div>
          </div>
        )}
    </>
  );
}

export default AboutSection;
