import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';

export const AboutMePage = {
  route: '/',
  name: 'Home',
  component: AboutMe,
};

export const ContactMePage = {
  route: '/contact-me',
  name: 'Contact Me',
  component: ContactMe,
}

export const ProjectsPage = {
  route: '/projects',
  name: 'Projects',
  component: Projects,
};

export const Pages = [
  AboutMePage,
  ProjectsPage,
  ContactMePage,
];