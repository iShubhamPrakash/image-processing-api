import isImageAvailable from '../utils/isImageAvailable';

describe('Test for isImageAvailable function', () => {
  it('should be defined', () => {
    expect(isImageAvailable).toBeDefined;
  });

  it('should return false for invalid file name', async () => {
    const result: boolean = isImageAvailable('arandomfilename.jpg');
    expect(result).toBe(false);
  });

  it('should return false for empty file name', async () => {
    const result: boolean = isImageAvailable('');
    expect(result).toBe(false);
  });

  it('should return true for valid file name', async () => {
    const result: boolean = isImageAvailable('fjord.jpg');
    expect(result).toBe(true);
  });

});
