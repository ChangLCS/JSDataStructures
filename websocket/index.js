/**
 * websocket 服务端
 */

'use strict';

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

const wsData = {};

//  获取聊天房间的key
const getKeyBase = (data) => {
  const roomKey = Object.keys(wsData);
  let keyBase = '';
  for (let i = 0; i < roomKey.length; i += 1) {
    const key = roomKey[i];
    if (key.indexOf(data.name) > -1 && key.indexOf(data.acceptName) > -1) {
      keyBase = key;
      break;
    }
  }
  return keyBase;
};

//  初始化聊天窗口
const register = (data, ws) => {
  const keyBase = getKeyBase(data);
  console.log('keyBase', keyBase);

  if (keyBase) {
    Object.assign(wsData[keyBase], {
      [data.name]: ws,
    });
  } else {
    wsData[data.roomName] = {
      [data.name]: ws,
      message: [],
    };
  }
  ws.send(JSON.stringify(wsData[keyBase || data.roomName].message));
};

//  给人发送消息
const sendMessage = (data) => {
  const keyBase = getKeyBase(data);
  console.log('keyBase', keyBase);

  wsData[keyBase].message.push(data);

  const message = JSON.stringify(wsData[keyBase].message);

  if (wsData[keyBase][data.name]) {
    wsData[keyBase][data.name].send(message);
  }

  if (wsData[keyBase][data.acceptName]) {
    wsData[keyBase][data.acceptName].send(message);
  }
};

wss.on('connection', function connection(ws) {
  ws.on('message', function(message) {
    const data = JSON.parse(message);
    if (data.type === 'register') {
      register(data, ws);
    } else if (data.type === 'message') {
      sendMessage(data);
    }
  });

  ws.on('close', function() {
    console.log('链接被关闭了');
  });
});

console.log('-----------------------------');
console.log('3000       server running');
