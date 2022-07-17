import React from 'react';
import './ProjectsSection.css';

const sectionIntro = 'I\'ve found that one of the best ways to learn new things is to try it out yourself! Here is a collection of projects which I\'ve created over the years to experiment with new technologies or just for fun.';

const projects = [
  {
    name: 'Wine not Splurge?',
    imageUrl: '/project-logos/wine-not-splurge.png',
    description: 'Wine not Splurge is a visual narration I created to explore the D3 library. The narration explores the correlation between the cost of wine and it\'s quality and attempts to answer the question if it\'s worth spending a little extra on a bottle of wine.',
    technologiesUsed: [
      { name: 'HTML', icon: '/technology-icons/html.svg' },
      { name: 'CSS', icon: '/technology-icons/css.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/nerf-blaster',
    projectUrl: 'https://www.wine-not-splurge.tutkowski.com',
  },
  {
    name: 'Nerf Blaster',
    imageUrl: '/project-logos/nerf-blaster.jpeg',
    description: 'Nerf gun battles are not only a fun toy for kids, but can also be fun in office environments used for team building and comradery! This project remotely controls a nerf blaster using two servos to aim the device, a linear actuator to fire the device, and the pi-camera and tensorflow libraries to perform image tracking.',
    technologiesUsed: [
      { name: 'Angular', icon: '/technology-icons/angular.svg' },
      { name: 'Python', icon: '/technology-icons/python.svg' },
      { name: 'HTML', icon: '/technology-icons/html.svg' },
      { name: 'CSS', icon: '/technology-icons/css.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/nerf-blaster',
    projectUrl: undefined,
  },
  {
    name: 'Task Tracker',
    imageUrl: '/project-logos/task-tracker.png',
    description: 'Task tracker is a react application, which I created in order to explore React and Azure Serverless Functions.',
    technologiesUsed: [
      { name: 'React', icon: '/technology-icons/react.svg' },
      { name: 'Javascript', icon: '/technology-icons/javascript.svg' },
      { name: 'Typescript', icon: '/technology-icons/typescript.svg' },
      { name: 'HTML', icon: '/technology-icons/html.svg' },
      { name: 'CSS', icon: '/technology-icons/css.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/TaskTracker',
    projectUrl: undefined,
  },
  {
    name: 'Scrum Poker',
    imageUrl: '/project-logos/scrum-poker.png',
    description: 'This project is a light weight scrum poker planning application, which I was motivated to create after the scrum poker app that I had been using started to slow down with unnecessary animations and ads. The application consists of a deck view and the card view, which allow the user to select a planning card from the Planning Poker cards designed by Redbooth and are licensed under Creative Commons – Attribution (CC BY 3.0).',
    technologiesUsed: [
      { name: 'Java', icon: '/technology-icons/java.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/ScrumPoker',
    projectUrl: 'https://play.google.com/store/apps/details?id=poker.scrum.tutkowski.scrumpoker',
  },
  {
    name: 'Cowsay',
    imageUrl: '/project-logos/cowsay.png',
    description: 'This project is a port for the fun linux cowsay application to Android, which allows the user to share the message in raw text format or as an image using intents.',
    technologiesUsed: [
      { name: 'Java', icon: '/technology-icons/java.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/AndroidCowsay',
    projectUrl: 'https://play.google.com/store/apps/details?id=cowsay.andriod.tutkowskim.androidcowsay',
  },
];

const ProjectsSection = () => (
  <>
    <h3>{'Some Things I\'ve Been Working on.'}</h3>
    <p>{sectionIntro}</p>
    <div className="projects-collection">
      {projects.map((project) => (
        <div className="project" key={project.name}>
          <div className="project-image-container">
            <img className="project-image" src={project.imageUrl} alt={project.name} />
          </div>
          <div className="project-information-container">
            <h4 className="project-title">{project.name}</h4>
            <div className="project-technologies">
              {project.technologiesUsed.map((t) => (
                <img key={t.name} alt={t.name} title={t.name} src={t.icon} />
              ))}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              { project.projectUrl && <a href={project.projectUrl}><button type="button">View Project</button></a>}
              { project.githubUrl && <a href={project.githubUrl}><button type="button">View Source</button></a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ProjectsSection;
