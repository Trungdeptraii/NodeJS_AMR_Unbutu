const { parentPort } = require('worker_threads');
const {io} = require(`${__dirname}/../src/app.js`);
let Robot
// console.log(io);
io.on('connection', (client)=>{
    let id = client.id;
    client.emit('status', 'Kết nối tới server thành công nhé');
    client.on("status", (status)=>{
        console.log('status', status);
        dem++;
        client.emit('status', dem)
    })
    client.on('tien', (data)=>{
        console.log('Tien');
    })
    client.on('lui', (data)=>{
        console.log('Lui');
    })
    client.on('trai', (data)=>{
        console.log('Trai');
    })
    client.on('phai', (data)=>{
        console.log('Phai');
    })
})
parentPort.on('message', (data)=>{
    console.log(io);
    // io.on('connection', (client)=>{
    //     console.log(client.id);
    // })
})
parentPort.postMessage({name: 123})
