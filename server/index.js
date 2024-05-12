const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 9998
});

wss.on('connection', client => {
    console.log('有客户端连接成功了')
    client.on('message', msg => {
        console.log('接受客户端发来的数据: ', msg.toString('utf-8'));
        client.send('hello client');
    })
})
