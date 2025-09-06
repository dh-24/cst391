import express from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";
dotenv.config();

// import only the type definitions for Request and Response from Express
import type { Request, Response } from 'express';

// create an instance of Express application
const app = express();
// define the port where server listens for requests
const port = 3000;

// parse JSON bodies
app.use(express.json());
// parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// enable all CORS requests
app.use(cors());
// add security headers
app.use(helmet());

// use logger
if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
console.log(process.env.GREETING + ' in dev mode');
}

// register routers
app.use('/', [albumsRouter, artistsRouter]);

// set up a GET route handler for root url /
app.get('/', (req: Request, res: Response) => {
    // send back plain text response
    res.send('Hello World from TypeScript!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
