import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';
import { getListCourses } from './courseSelector';
const courseList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const normalizedCourses = coursesNormalizer(courseList);
const initialState = fromJS({ courses: normalizedCourses });

describe('courseSelector', () => {
  it('should return a list of the courses from within the reducer', () => {
    const result = getListCourses(initialState);
    expect(result.toJS()).toEqual(normalizedCourses);
  });
});
