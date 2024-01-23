const { parentPort } = require('worker_threads');
const Robot = require(`${__dirname}/../src/amr/inital.js`);
async function getStatus(){
    parentPort.postMessage(await Robot.status());
    getStatus()
}
Robot.connect();
Robot.socket_status.on('connect', ()=>{
    getStatus()
})