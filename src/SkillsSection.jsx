import React from 'react';
import { BreakPoints, useBreakpoints } from './useBreakpoints';
import './SkillsSection.css';

const sectionIntro = 'Like most engineers I have a passions for constantly learning new skills and technologies. Here are just a few I\'d like to highlight.';

// A good place to look for icons are: https://commons.wikimedia.org/
const skills = [
  { name: 'Angular', icon: '/technology-icons/angular.svg' },
  { name: 'React', icon: '/technology-icons/react.svg' },
  { name: 'Typescript', icon: '/technology-icons/typescript.svg' },
  { name: 'Javascript', icon: '/technology-icons/javascript.svg' },
  { name: 'Java', icon: '/technology-icons/java.svg' },
  { name: 'C#', icon: '/technology-icons/c_sharp.svg' },
  { name: 'Python', icon: '/technology-icons/python.svg' },
  { name: 'Git', icon: '/technology-icons/git.svg' },
  { name: 'Gradle', icon: '/technology-icons/gradle.svg' },
  { name: 'GraphQL', icon: '/technology-icons/graphql.svg' },
  { name: 'HTML', icon: '/technology-icons/html.svg' },
  { name: 'CSS', icon: '/technology-icons/css.svg' },
];

const SkillsSection = () => {
  const breakpoint = useBreakpoints();
  const gridColumnLength = breakpoint === BreakPoints.SMALL ? 3 : 6;
  const gridTemplateColumns = `repeat(${gridColumnLength}, 100px)`;
  const gridTemplateRows = `repeat(${Math.ceil(skills.length / gridColumnLength)}, 100px)`;
  return (
    <>
      <h3>{'A Few Skills I\'ve Picked Up.'}</h3>
      <p>{sectionIntro}</p>
      <div className="skills-container" style={{ gridTemplateColumns, gridTemplateRows }}>
        {skills.map((skill) => <img className="skills-container-item" key={skill.name} alt={skill.name} title={skill.name} src={skill.icon} />)}
      </div>
    </>
  );
};

export default SkillsSection;
