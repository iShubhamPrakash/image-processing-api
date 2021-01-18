import express, {Request, Response} from 'express';
const resizeRouter = express.Router();

resizeRouter.get("/", (req:Request, res: Response)=>{
  // Get the image file name 

  // Check if the image file is already present in the image directory
    // If not respond with an error message

    // If yes, check if the image with the requested dimention is available 
      // If not, create the image file with the requested dimention and send it in the response
      // If yes send it in the response
  res.send("Image Resized")
})

export default resizeRouter;



