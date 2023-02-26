import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { BreakPoints, useBreakpoints } from './useBreakpoints';
import useOutsideAlerter from './useOutsideAlerter';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import './App.css';

const sections = [
  { id: 'about', label: 'About', component: AboutSection },
  { id: 'skills', label: 'Skills', component: SkillsSection },
  { id: 'experience', label: 'Experience', component: ExperienceSection },
  { id: 'projects', label: 'Projects', component: ProjectsSection },
];

function App() {
  const breakPoint = useBreakpoints();
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  useOutsideAlerter([menuBtnRef, menuRef], hideMenu);

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className="portfolio-header-item-content-wrapper">
          <div className="portfolio-header-logo">
            <img src="/logo-white.svg" height={40} alt="Mark Tutkowski" />
            <h2 className="portfolio-header-item">Mark Tutkowski</h2>
          </div>
          {breakPoint === BreakPoints.SMALL ? (
            <button className="portfolio-header-item" type="button" aria-label="Menu" ref={menuBtnRef} onClick={toggleMenu} style={{ width: 47.66 }}>
              <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
            </button>
          ) : (
            <>
              {sections.map((section) => (
                <a key={section.id} className="portfolio-header-item" href={`#${section.id}`}>
                  <button type="button">{section.label}</button>
                </a>
              ))}
              <a className="portfolio-header-item" href="https://www.resume.tutkowski.com"><button className="portfolio-resume-button" type="button">Resume</button></a>
            </>
          )}
        </div>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-content-wrapper flex-column">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              {section.component()}
            </div>
          ))}
        </div>
        {breakPoint === BreakPoints.SMALL && (
          <div ref={menuRef} className={classNames('portfolio-menu', { 'portfolio-menu--visible': showMenu })}>
            {sections.map((section) => (
              <a key={section.id} className="portfolio-menu-item" href={`#${section.id}`} onClick={hideMenu}>
                <button type="button">{section.label}</button>
              </a>
            ))}
            <a className="portfolio-menu-item" href="https://www.resume.tutkowski.com"><button type="button">Resume</button></a>
          </div>
        )}
      </div>
      {breakPoint === BreakPoints.LARGE ? (
        <>
          <div className="portfolio-left-bar">
            <div className="vertical-line" />
            <a href="https://www.linkedin.com/in/marktutkowski/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/tutkowskim" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
            <div className="vertical-line" />
          </div>
          <div className="portfolio-right-bar">
            <div className="vertical-line" />
            <a className="rotated-text" href="mailto:mark@tutkowski.com" aria-label="navmenu">mark@tutkowski.com</a>
            <div className="vertical-line" />
          </div>
        </>
      ) : (
        <div className="portfolio-footer">
          <div className="portfolio-footer-wrapper">
            <div className="horizontal-line" />
            <div>
              <a href="mailto:mark@tutkowski.com" aria-label="navmenu">mark@tutkowski.com</a>
              <div className="portfolio-footer-icons">
                <a href="https://www.linkedin.com/in/marktutkowski/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/tutkowskim" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
            <div className="horizontal-line" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
