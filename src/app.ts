import express, { Application, Request, Response, NextFunction } from 'express';
import resizeRouter from './routes/resizeRouter';

//Instantiating express app
const app: Application = express();

// Use the routes/resizeRouter file to handle all the requests to endpoints that starts with "resize"
app.use('/resize', resizeRouter);

// Handle requests to root
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello world!');
});


export default app;