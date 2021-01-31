import fs from 'fs';
import path from 'path';

function isImageAvailable(fileName = '', fileExtension='jpg'): boolean {

  console.log("Checking availability of ",fileName);

  if (fileName.length === 0) return false;

  const filePath = path.join(__dirname, `../images`, `${fileName}.${fileExtension}`);

  console.log("Full file path: ", filePath)

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

export default isImageAvailable;
