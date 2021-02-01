import fs from 'fs';
import sharp from 'sharp';
import { getImageName } from './index';

// Main utility function to resize the image to the provided dimentions
const resizeImage = (
  fileName: string,
  fileExtension = 'jpg',
  width: number,
  height: number,
  inputPath: string,
  outputPath: string
): Promise<string> =>
  new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(
      `${inputPath}/${fileName}.${fileExtension}`
    );
    const outputFile = `${outputPath}/${getImageName(
      fileName,
      width,
      height,
      fileExtension
    )}`;
    const writeStream = fs.createWriteStream(outputFile);

    console.log('Resizing the image...');
    const transformer = sharp().resize(width, height);
    readStream.pipe(transformer).pipe(writeStream);

    writeStream.on('finish', () => {
      resolve(outputFile);
    });
    writeStream.on('error', reject);
  });

export default resizeImage;
