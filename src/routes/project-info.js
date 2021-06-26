import PlaceHolder from './components/PlaceHolder';
import { getProjectRoute } from './route-paths';

export class ProjectInfo {
  constructor(name, imageSrc, component) {
    this.name = name;
    this.path = getProjectRoute(name);
    this.imageSrc = imageSrc;
    this.component = component;
  }
}

export const projectInfo = [
  new ProjectInfo('Project 001', 'http://placekitten.com/200/200', PlaceHolder),
  new ProjectInfo('Project 002', 'http://placekitten.com/300/300', PlaceHolder),
  new ProjectInfo('Project 003', 'http://placekitten.com/400/400', PlaceHolder),
  new ProjectInfo('Project 004', 'http://placekitten.com/500/500', PlaceHolder),
  new ProjectInfo('Project 005', 'http://placekitten.com/600/600', PlaceHolder),
  new ProjectInfo('Project 006', 'http://placekitten.com/700/700', PlaceHolder),
  new ProjectInfo('Project 007', 'http://placekitten.com/800/800', PlaceHolder),
  new ProjectInfo('Project 008', 'http://placekitten.com/900/900', PlaceHolder),
  new ProjectInfo('Project 009', 'http://placekitten.com/1000/1000', PlaceHolder),
];
