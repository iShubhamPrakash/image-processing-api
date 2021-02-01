import express, { Application, Request, Response, NextFunction } from 'express';
import resizeRouter from './routes/resizeRouter';

//Instantiating express app
const app: Application = express();

// Use the routes/resizeRouter file to handle all the requests to endpoints that starts with "resize"
app.use('/resize', resizeRouter);

// Handle requests to /test endpoint
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello world!');
});

// Handle requests to root
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('working');
});


export default app;