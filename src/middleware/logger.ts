import morgan from 'morgan';


/*
*   Log format (tiny) =    :method :url :status :res[content-length] - :response-time ms
*/

const logger = morgan('tiny');

export default logger;
