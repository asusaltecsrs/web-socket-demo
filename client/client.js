let sendDom = document.querySelector('#send');

let ws = new WebSocket('ws://localhost:9998');
ws.onopen = () => {
    console.log('connect success !')
}
ws.onclose = () => {
    console.log('connect failure !')
}

ws.onmessage = me => {
    console.log('receive data: ' + me.data)
}

sendDom.addEventListener('click', () => {
    ws.send('hello server')
}, false);
