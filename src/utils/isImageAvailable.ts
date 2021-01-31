import fs from 'fs';
import path from "path"

function isImageAvailable(fileName: string): boolean {

  if(fileName.length === 0) return false;
  
  const filePath = path.join(__dirname,`../images`,fileName);

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