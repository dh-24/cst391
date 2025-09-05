// import express library
import express = require('express');

// import dotenv library
import dotenv from "dotenv";
dotenv.config();


// import only the type definitions for Request and Response from Express
import type { Request, Response } from 'express';

// create an instance of Express application
const app = express();

// define the port where server listens for requests
const port = 3000;

// set up a GET route handler for root url /
app.get('/', (req: Request, res: Response) => {
    // send back plain text response
    res.send('Hello World from TypeScript!');
});

// start Express server and listen on the port 3000
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
console.log(process.env.GREETING);
});