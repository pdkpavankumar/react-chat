import express from 'express';
import socketIO from 'socket.io';

const port = process.env.port || 3000;
const index = './public/index.html';
const server = express()
  .use((req, res) => res.sendFile(index, { root: __dirname }))
  .listen(port, () => console.log('liteining!'));
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('ocket connected!');
  socket.on('disconnect', () => console.log('diconnected!'));
})