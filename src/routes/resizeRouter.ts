import express, { Request, Response } from 'express';
import path from 'path';
import getImageName from '../utils/getImageName';
import isImageAvailable from '../utils/isImageAvailable';
import resizeImage from '../utils/resize-image';
const resizeRouter = express.Router();

resizeRouter.get('/', async (req: Request, res: Response) => {
  // URL format sample:   http://localhost:5000/resize?name=fjord&width=200&height=200

  // Get the data from query parameters
  const fileName = req.query.name && (req.query.name as string).split('.')[0];
  const fileExtension = (req.query.fileExtension as string) || 'jpg';
  const width = req.query.width as string;
  const height = req.query.height as string;

  // send error if valid file name not exist
  if (!fileName) {
    return res.status(400).json({
      error: 'Please specify the file name',
    });
  }

  // send error if valid dimentsions not exist
  if (!width || !height) {
    return res.status(400).json({
      error: 'Please specify both width and height values',
    });
  }

  // Check if the image file is already present in the images directory
  const imageAvailable = isImageAvailable(fileName);

  // If image file not available, respond with an error message
  if (!imageAvailable) {
    return res.status(404).json({
      error: 'The requested image is not available',
    });
  }

  // If image file available, check if the same image with the requested size is available
  // A sample file name fjord200x200.jpg
  const fullFileName = getImageName(fileName, width, height, fileExtension);

  const requestedSizeAvailable = isImageAvailable(fullFileName, fileExtension);

  // If yes, send it
  if (requestedSizeAvailable) {
    return res
      .status(200)
      .sendFile(`../images/${fullFileName}.${fileExtension}`);
  }

  // If not, create the image file with the requested dimention and send it in the response
  resizeImage(
    fileName,
    fileExtension,
    parseInt(width),
    parseInt(height),
    path.join(__dirname, '/../images'),
    path.join(__dirname, '/../images')
  )
    .then((filePath) =>
      res.sendFile(filePath)
    )
    .catch((error) =>
      res.json({
        error: 'Image couled not be resized',
        success: false,
      })
    );
});

export default resizeRouter;
