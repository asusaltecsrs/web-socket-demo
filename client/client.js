let sendDom1 = document.querySelector('#send1');
let sendDom2 = document.querySelector('#send2');

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

sendDom1.addEventListener('click', () => {
    ws.send(JSON.stringify({
        type: 'self',
        value: '私密话',
    }))
}, false);

sendDom2.addEventListener('click', () => {
    ws.send(JSON.stringify({
        type: '',
        value: '大喇叭画',
    }))
}, false);
