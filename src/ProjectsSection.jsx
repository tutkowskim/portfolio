import React from 'react';
import './ProjectsSection.css';

const sectionIntro = 'I\'ve found that one of the best ways to learn new things is to try it out yourself! Here is a collection of projects which I\'ve created over the years to experiment with new technologies or just for fun.';

const projects = [
  {
    name: 'News Word Cloud',
    imageUrl: '/project-logos/news-word-cloud.png',
    description: 'A news search bar which creates a word cloud to highlight popular words in recent articles to help visualize popular topics.',
    technologiesUsed: [
      { name: 'Typescript', icon: '/technology-icons/typescript.svg' },
      { name: 'Angular', icon: '/technology-icons/angular.svg' },
      { name: 'HTML', icon: '/technology-icons/html.svg' },
      { name: 'CSS', icon: '/technology-icons/css.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/news-word-cloud',
    projectUrl: 'https://www.news.tutkowski.com',
  },
  {
    name: 'Wine not Splurge?',
    imageUrl: '/project-logos/wine-not-splurge.png',
    description: 'Wine not Splurge is a visual narration I created to explore the D3 library. The narration explores the correlation between the cost of wine and it\'s quality and attempts to answer the question if it\'s worth spending a little extra on a bottle of wine.',
    technologiesUsed: [
      { name: 'Javascript', icon: '/technology-icons/javascript.svg' },
      { name: 'HTML', icon: '/technology-icons/html.svg' },
      { name: 'CSS', icon: '/technology-icons/css.svg' },
    ],
    githubUrl: 'https://github.com/tutkowskim/wine-not-splurge',
    projectUrl: 'https://www.wine-not-splurge.tutkowski.com',
  },
];

function ProjectsSection() {
  return (
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
}

export default ProjectsSection;
