import ProjectDetails from './ProjectDetails';

const ProjectDetailsRouteInfo = {
  route: '/project/:name',
  name: undefined,
  visibleRoute: false,
  component: ProjectDetails,
};

export const getProjectRoute = (projectName) => ProjectDetailsRouteInfo.route.replace(':name', projectName);

export default ProjectDetailsRouteInfo;
