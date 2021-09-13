import express, { Express } from 'express';
import databaseConnection from './setup/database';
import serverConnnection from './setup/server';
import socketConnection from './setup/socket';

const app: Express = express();

databaseConnection();

serverConnnection(app);

socketConnection(app);
