const {Worker} = require('node:worker_threads');
const dataRelocation = require(`${__dirname}/src/utils/relocation.js`)
const {app, io} = require(`${__dirname}/src/app.js`);
const Robot = require(`${__dirname}/src/amr/inital.js`);
const {readDataAMR} = require(`${__dirname}/src/utils/func.js`);
const {control: controlAPI, navigation: navigationAPI} = require(`${__dirname}/src/amr/api.js`)
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

// Server REST
let server = app.listen(port, host, async ()=>{
    console.log('Start server port: ', port);
    // Robot.connect();
})
// Socket io
io.on('connection', (client)=>{
    let id = client.id;
    client.emit('started', 'Kết nối tới server thành công');
    client.on("status", (status)=>{
        let a = status;
        client.emit('status', Robot.status)
    })
    client.on('monitor', async (data)=>{
        console.log(data);
        if(!Robot.connectAMR){
            return client.emit('toast', {type: 'error', message: 'Lệnh thực thi thất bại - chưa kết nối tới AMR'});
        }
        await Robot.monitor(data)
    })
    client.on('move_stop', async(data)=>{
        if(!Robot.connectAMR){
            return client.emit('toast', {type: 'error', message: 'Lệnh thực thi thất bại - chưa kết nối tới AMR'});
        }
        await Robot.monitor(data)
    })
    client.on('navigation', async(navigation)=>{
        const _net = Robot.socket_navigation;
        const type = navigationAPI[navigation.type_navigation]
        const {data} = navigation;
        let result;
        if(!Robot.connectAMR){
            return client.emit('toast', {type: 'error', message: 'Lệnh thực thi thất bại - chưa kết nối tới AMR'});
        }
        if(navigation.type_navigation == 'robot_task_gotarget_req'){
            result = await readDataAMR(_net, type, data);
        }else if(navigation.type_navigation  == 'robot_task_pause_req'){
            result = await readDataAMR(_net, type, data);
        }else if(navigation.type_navigation == 'robot_task_resume_req'){
            result = await readDataAMR(_net, type, data);
        }else if(navigation.type_navigation == 'robot_task_cancel_req'){
            result = await readDataAMR(_net, type, data);
        }
        console.log(result);
        switch (result.ret_code) {
            case 0:
                client.emit('toast', {type: 'success', message: 'Đã gửi dữ liệu thành công'})
                break;
            default:
                client.emit('toast', {type: 'error', message: 'Dữ liệu gửi đi lỗi - vui lòng kiểm tra lại'})
                break;
        }
        result = {type: navigation.type_navigation, ...result}
        client.emit('result_api', JSON.stringify(result));
    })
    client.on('control', async(control)=>{
        const _net = Robot.socket_control;
        let type = controlAPI[control.type_control]
        console.log(control);
        const {data} = control; 
        // if(!Robot.connectAMR){
        //     return client.emit('toast', {type: 'error', message: 'Lệnh thực thi thất bại - chưa kết nối tới AMR'});
        // }
        let result = {};
        switch(control.type_control){
            case 'robot_control_reloc_req':
                result = await readDataAMR(_net, type, data);
                break;
            case 'robot_control_comfirmloc_req':
                result = await readDataAMR(_net, type, data);
                break;
            case 'get_point_relocation':
                console.log(dataRelocation, '123');
                client.emit('get_point_relocation', dataRelocation)
                result.ret_code = 0;
                break;
            case 'relocation_point':
                type = controlAPI["robot_control_reloc_req"];
                const dataPoint = dataRelocation.find(({id})=>id==data);
                if(!dataPoint){
                    return client.emit('toast', {type: "error", message: "Điểm Relocation không tồn tại !!!"})
                }
                const {x, y, angle} = dataPoint;
                result = await readDataAMR(_net, type, {x, y, angle});
        }
        switch (result.ret_code) {
            case 0:
                client.emit('toast', {type: 'success', message: 'Đã gửi dữ liệu thành công'})
                break;
            default:
                client.emit('toast', {type: 'error', message: 'Dữ liệu gửi đi lỗi - vui lòng kiểm tra lại'})
                break;
        }
        result = {type: control.type_control, ...result}
        client.emit('result_api', JSON.stringify(result))
    })
})

Robot.socket_status.on('error', (error)=>{
    console.log('........................Socket Error', error);
    Robot.connectAMR = false;
    let reconnectSocket = setTimeout(()=>{
        console.log('Đang khởi tạo reconnect ...');
        Robot.connect();
        clearTimeout(reconnectSocket)
    }, 1000)
})
Robot.socket_status.on('connect', (error)=>{
    console.log('Coneected');
    Robot.connectAMR = true;
    let socket, worker
    if(!socket){
        socket =new Worker(`${__dirname}/threads/socket.io.js`);
    }
    if(!worker){
        worker = new Worker(`${__dirname}/threads/process_status.js`);
        worker.on('message', (message)=>{
            Robot.status = message;
        })
    }
})

  
// Bắt sự kiện 'uncaughtException'
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    if(err.code == 'ECONNRESET' || err.code === 'EADDRNOTAVAIL'){
        let reconnectSocket = setTimeout(()=>{
            console.log('Đang khởi tạo reconnect ...');
            Robot.connectAMR = false;
            Robot.connect();
            clearTimeout(reconnectSocket)
        }, 1000)
    }

});