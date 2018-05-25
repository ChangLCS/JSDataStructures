/**
 * websocket 服务端
 */

'use strict';

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('接受到的是：', message);
  });

  const fun = () => {
    ws.send(`你好啊 ${new Date()}`);
  };

  const interval = setInterval(fun, 1000);

  ws.on('close', function() {
    console.log('close');
    clearInterval(interval);
  });
});

console.log('-----------------------------');
console.log('3000       server running');
