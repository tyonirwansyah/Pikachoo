import { Server as SocketServer } from 'socket.io';
import { Express } from 'express';
import { createServer, Server } from 'http';

export default function socketConnection(server: Express) {
  const app: Server = createServer(server);
  const io: SocketServer = new SocketServer(app);

  io.on('connection', (socket: any) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('disconnect', () => {
      console.log(`User ${socket.id} disconnected`);
    });
  });
}
