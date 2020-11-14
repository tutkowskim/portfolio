import ProjectData from './ProjectData.json';

const requiredFields = ['name', 'description', 'coverImageUrl', 'projectUrl'];
const optionalFields = ['productionUrl'];
const validFields = [...requiredFields, ...optionalFields];

test('verify the project data is a non-empty array', () => {
  expect(Array.isArray(ProjectData)).toBe(true);
  expect(ProjectData.length > 0).toBe(true);
});

ProjectData.forEach((project) => {
  test(`check all fields are valid in ${JSON.stringify(project)}`, () => {
    Object.keys(project).forEach((field) => {
      expect(validFields.includes(field)).toBeTruthy();
    });
  });

  test(`check required fields exist in ${JSON.stringify(project)}`, () => {
    requiredFields.forEach((field) => {
      expect(project[field]).toBeTruthy();
      expect(typeof project[field] === 'string').toBeTruthy();
    });
  });
});
