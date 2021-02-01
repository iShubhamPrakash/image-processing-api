import fs from 'fs';
import path from 'path';

// This function checks if a image file is already available in the images directory
export function isImageAvailable(
  fileName = '',
  fileExtension = 'jpg'
): boolean {

  if (fileName.length === 0) return false;

  const filePath = path.join(
    __dirname,
    `../images`,
    `${fileName}.${fileExtension}`
  );

  console.log('Full file path: ', filePath);

  try {
    if (fs.existsSync(filePath)) {
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }

  return false;
}

// This function gives the full name of the resized image file with proper format
export function getImageName(
  fileName: string,
  width: string | number,
  height: string | number,
  fileExtension = 'jpg'
): string {
  return `${fileName}_${width}x${height}.${fileExtension}`;
}
