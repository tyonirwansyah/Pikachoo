import express, { Application, Request, Response } from 'express';
import { Server } from 'socket.io';

const app: Application = express();
const PORT = 5000 || process.env.PORT;
const expressServer = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
const io = new Server(expressServer);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

io.on('connection', (socket: any) => {
  // this message can be logged once we connect to the client-side
  console.log(`User connected with id ${socket.id}`);
});
