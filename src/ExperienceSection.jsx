import React, { useState } from 'react';
import classNames from 'classnames';
import './ExperienceSection.css';

const experience = [
  {
    company: 'Rockwell Automation',
    role: 'Software Engineer',
    period: 'June 2012 - April 2021 & Feb 2022 - Present',
    responsibilities: [
      'Served as a team leader for an engineering team of 4 developers and 2 test engineers',
      'Developed features in Angular, Kotlin, Typescript, and Node.js for a next generation software project',
      'Developed features in Java, C#, and C++ for Studio 5000 View Designer',
      'Received two innovation awards for innovative product features and internal tooling',
      'Mentored new engineers and student associates',
    ],
  },
  {
    company: 'Northwestern Mutual',
    role: 'Software Engineer',
    period: 'April 2021 - Feb 2022',
    responsibilities: [
      'Developed a green field application used to help prevent fraud',
      'Built and designed UI components in React',
      'Built supporting services in Node.js using kubernetes and aws lambdas',
    ],
  },
];

const ExperienceSection = () => {
  const [selectedExperienceItem, setSelectedExperienceItem] = useState(experience[0]);
  return (
    <>
      <h3>My Professional Journey so Far.</h3>
      <div className="experience-tabber">
        <div className="experience-tabs">
          {experience.map((position) => (
            <button
              className={classNames('experience-tab', { 'experience-tab--selected': position === selectedExperienceItem })}
              key={position.company}
              type="button"
              tabIndex={0}
              onClick={() => setSelectedExperienceItem(position)}
              onKeyPress={() => setSelectedExperienceItem(position)}
            >
              {position.company}
            </button>
          ))}
        </div>
        <div className="experience-tab-outlet">
          <h4>
            <span>{selectedExperienceItem.role}</span>
            <span>{' @ '}</span>
            <span>{selectedExperienceItem.company}</span>
          </h4>
          <p>{selectedExperienceItem.period}</p>
          <ul style={{ margin: 0 }}>
            {selectedExperienceItem.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
