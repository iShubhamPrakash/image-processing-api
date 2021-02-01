import express, { Application, Request, Response } from 'express';
import logger from './middleware/logger';
import resizeRouter from './routes/resizeRouter';

//Instantiating express app
const app: Application = express();

// Use logger middleware
app.use(logger);

// initialise public folder
app.use('/', express.static(__dirname + '/public'));

// Use the routes/resizeRouter file to handle all the requests to endpoints that starts with "resize"
app.use('/resize', resizeRouter);

// Handle requests to /test endpoint
app.get('/test', (req: Request, res: Response) => {
  res.send('Hello world!');
});

export default app;
