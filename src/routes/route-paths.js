export const about = '/about';
export const connect = '/connect';
export const work = '/work';
export const project = '/work/:projectName';

export const getProjectRoute = (projectName) => project.replace(':projectName', projectName);
