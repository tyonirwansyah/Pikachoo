import express, { Express } from 'express';
import serverConnnection from './setup/server';
import socketConnection from './setup/socket';

const app: Express = express();

serverConnnection(app);

socketConnection(app);
