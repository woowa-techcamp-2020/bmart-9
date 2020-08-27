import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import router from './routes';
import { errorHandler } from './middlewares/error-handler';
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(passport.initialize());

// Serve static files at `public` directory

app.use(router);

app.use(errorHandler);

app.get('/*', (req, res) => {
  res.send('Wellcome to Bmart-9 API');
});

export default app;
