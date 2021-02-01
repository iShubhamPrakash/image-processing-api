import { getImageName, isImageAvailable } from '../utils';

describe('Tests for isImageAvailable function', () => {
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

describe('Tests for getImageName function', () => {
  it('should be defined', () => {
    expect(getImageName).toBeDefined;
  });

  it('should return a valid file name for a valid input', async () => {
    const result: string = getImageName('arandomfilename', 200, 200, 'jpg');
    expect(result).toBe('arandomfilename_200x200.jpg');
  });
});
