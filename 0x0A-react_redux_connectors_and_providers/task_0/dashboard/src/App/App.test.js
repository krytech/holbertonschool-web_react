import { fromJS } from 'immutable';
import { mapStateProps } from './App';

describe('mapStateToProps', () => {
  it('verify that the function returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });
    const result = mapStateProps(state);
    expect(result).toEqual({ isUserLoggedIn: true });
  });
});
