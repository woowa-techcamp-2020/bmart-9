import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, NextFunction } from 'express';

import bodyParser from 'body-parser';
import path from 'path';
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
app.use(passport.session());

// Serve static files at `public` directory
app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

app.use(errorHandler);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;
