import express, {Request, Response} from 'express';
const resizeRouter = express.Router();

resizeRouter.get("/", (req:Request, res: Response)=>{
  // URL format sample:   http://localhost:5000/resize?name=fjord&width=200&height=200
  // Get the image file name 

  // const fileName: string = req.query.name;
  // const width: string = req.query.width;
  // const height: string = req.query.height;


  // Check if the image file is already present in the image directory
    // If not respond with an error message

    // If yes, check if the image with the requested dimention is available 
      // If not, create the image file with the requested dimention and send it in the response
      // If yes send it in the response
  res.send("Image Resized")
})

export default resizeRouter;



