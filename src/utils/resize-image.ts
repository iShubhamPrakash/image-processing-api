import fs from "fs";

// Main utility function to resize the image to the provided dimentions
export const resizeImage = (
	path: string,
	format: string,
	width: number,
	height: number
) => {
  const readStream = fs.createReadStream(path);
  return readStream;
};
