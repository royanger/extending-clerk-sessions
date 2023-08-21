import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';

//For env File
dotenv.config();


const app: Application = express();
const port = process.env.EXPRESS_PORT || 8000;

app.get('/', (req: Request, res: Response) => {
   res.send(`Hello World!1`);
});

app.listen(port, () => {
   console.log(`TypeScript Server started at http://localhost:${port}`);
});
