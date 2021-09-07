import { Express } from 'express';
import { SERVER_PORT } from '../config/env';

export default function serverConnnection(server: Express): void {
  console.log('[SETUP] - Starting server...');

  const serverProcess = server.listen(SERVER_PORT, () => {
    console.log('[INFO] - Server has started');
    console.log(`Local : http://localhost:${SERVER_PORT}`);
    console.log(`Datetime : ${new Date()}\n`);
  });

  serverProcess.setTimeout(5000);

  serverProcess.on('error', () => {
    console.log('[ERROR] - Unable to start server');
  });
}
