import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('should return correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('should return correct string if isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('should return correct string if isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School Main Dashboard');
  });

  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
