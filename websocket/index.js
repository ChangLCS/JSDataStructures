/**
 * websocket 服务端
 */

'use strict';

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

const retList = [];

wss.on('connection', function connection(ws) {
  ws.on('message', function(message) {
    retList.push(JSON.parse(message));
  });
  const fun = () => {
    ws.send(JSON.stringify(retList));
  };

  const interval = setInterval(fun, 1000);

  ws.on('close', function() {
    clearInterval(interval);
  });
});

console.log('-----------------------------');
console.log('3000       server running');
