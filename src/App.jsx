import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import { BreakPoints, useBreakpoints } from './useBreakpoints';
import useOutsideAlerter from './useOutsideAlerter';
import Sample from './Sample';
import './App.css';

const sections = [
  { id: 'about', label: 'About', component: Sample },
  { id: 'experience', label: 'Experience', component: Sample },
  { id: 'projects', label: 'Projects', component: Sample },
];

const App = () => {
  const breakPoint = useBreakpoints();
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => setShowMenu(false);
  const openMenu = () => setShowMenu(true);
  useOutsideAlerter(menuRef, hideMenu);

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className="portfolio-header-item-content-wrapper">
          <div className="portfolio-header-logo">
            <img src="/logo-white.svg" height={40} alt="Mark Tutkowski" />
            <h2 className="portfolio-header-item">Mark Tutkowski</h2>
          </div>
          {breakPoint === BreakPoints.SMALL
            ? <a className="portfolio-header-item" href="#menu" aria-label="navmenu" onClick={openMenu}><FontAwesomeIcon icon={faBars} /></a>
            : (
              <>
                {sections.map((section) => <a key={section.id} className="portfolio-header-item" href={`#${section.id}`}>{section.label}</a>)}
                <a className="portfolio-header-item" href="https://www.resume.tutkowski.com">Resume</a>
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
      </div>
      {breakPoint === BreakPoints.LARGE ? (
        <>
          <div className="portfolio-left-bar">
            <div className="vertical-line" />
            <a href="https://www.linkedin.com/in/marktutkowski/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/tutkowskim" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/tutkowski" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/tutkowski.mark" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <div className="vertical-line" />
          </div>
          <div className="portfolio-right-bar">
            <div className="vertical-line" />
            <a className="rotated-text" href="#menu" aria-label="navmenu">mark@tutkowski.com</a>
            <div className="vertical-line" />
          </div>
        </>
      ) : (
        <div className="portfolio-footer">
          <div className="portfolio-footer-wrapper">
            <div className="horizontal-line" />
            <div>
              <a href="#menu" aria-label="navmenu">mark@tutkowski.com</a>
              <div className="portfolio-footer-icons">
                <a href="https://www.linkedin.com/in/marktutkowski/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/tutkowskim" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/tutkowski" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.facebook.com/tutkowski.mark" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              </div>
            </div>
            <div className="horizontal-line" />
          </div>
        </div>
      )}
      {breakPoint === BreakPoints.SMALL && (
        <div ref={menuRef} className={classNames('portfolio-menu', { 'portfolio-menu--visible': showMenu })}>
          {sections.map((section) => <a key={section.id} className="portfolio-menu-item" href={`#${section.id}`} onClick={hideMenu}>{section.label}</a>)}
          <a className="portfolio-menu-item" href="https://www.resume.tutkowski.com">Resume</a>
        </div>
      )}
    </div>
  );
};

export default App;
