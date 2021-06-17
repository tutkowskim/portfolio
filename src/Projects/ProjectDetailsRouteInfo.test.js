import { getProjectRoute } from './ProjectDetailsRouteInfo';

const TEST_DATA = [
  { projectName: 'TestProject', expectedRoute: '/project/TestProject' },
  { projectName: 'Test Project', expectedRoute: '/project/Test Project' },
  { projectName: ' Test  Project ', expectedRoute: '/project/ Test  Project ' },
];

TEST_DATA.forEach((testData) => {
  test(`verify getProjectRoute(${testData.projectName}) is ${testData.expectedRoute}`, () => {
    expect(getProjectRoute(testData.projectName)).toBe(testData.expectedRoute);
  });
});