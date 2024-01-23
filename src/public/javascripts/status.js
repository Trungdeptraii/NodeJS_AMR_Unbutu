import {socket} from '/javascripts/socket.js'
const el = (element)=>document.querySelector(element);
const speed_current = el('.speed_current');
const currentStation = el('.current_station');
const confidence = el('.confidence');
const status_amr = el('.status_amr');
const point = el('.point');
const connect = el('.connect');
const battery =  el('.battery');
const charing = el('.charing');
const blocked = el('.blocked');
const emergency = el('.emergency');

socket.on('status', (status)=>{
    speed_current.innerText = ` Tốc độ hiện tại: ${status.vx} m/s`
    if(status.current_station){
        currentStation.innerText = ` Vị trí hiện tại: ${status.current_station}`;
    }else if(!status.current_station && status.target_id){
        currentStation.innerText = ` Vị trí tiếp theo: ${status.target_id}`;
    }
    confidence.innerText = ` Độ chính xác: ${status.confidence}`;
    status_amr.innerHTML = `<span>Trạng thái: <b>${status.task_status == 2 ? 'Đang chạy' : status.task_status == 3 ? 'Đang tạm dừng' : status.task_status == 4 ? 'Đã tới điểm' : status.task_status == 5 ? 'Không tìm thấy điểm' : status.task_status == 6? "Hủy lệnh": ''}</b></span>`
    battery.innerText = `Pin: ${(status.battery_level*100).toFixed(0)} %`;
    charing.innerHTML = ` Sạc pin: ${status.charging? 'Đang sạc': 'Không sạc'}`
    emergency.innerHTML = ` Dừng khẩn: ${status.emergency ? 'Yes': 'No'}`;
    blocked.innerHTML = ` Vật cản: ${status.blocked ? 'Yes': 'No'}`
})

function fnTien(){
    socket.emit("tien",{vx: 0.2, vy: 0, duration: 0})
}
function fnLui(){
    socket.emit("lui",{vx: -0.2, vy: 0, duration: 0})
}
function fnMoveStop(){
    socket.emit("move_stop",{vx: 0, vy: 0, w: 0})
}
function fnTrai(){
    socket.emit("phai",{vx: 0, vy: 0, w: 0.1, duration: 0})
}
function fnPhai(){
    let angle = 10;
    const red = (angle * Math.PI /180).toFixed(1);
    socket.emit("phai",{vx: 0, vy: 0, w: -0.1, duration: 0})
}
function fnPause(){
    socket.emit("pause",'')
}
function fnResume(){
    socket.emit("resume",'')
}
function fnCancel(){
    socket.emit("cancel",'')
}
function fnNavigation(){
    socket.emit('navigation', point.value);
    point.value = ''
}

let isKeyBroad = false
document.addEventListener('keypress', ({key})=>{
    if(key === 'w' || key === 'W'){
        console.log('Tiến');
    }else if(key === 'a' || key === 'A'){
        console.log('Trái');
    }else if(key === 'd' || key === 'D'){
        console.log('Phải');
    }else if(key === 's' || key === 'S'){
        console.log('Lùi');
    }
})
document.addEventListener('keyup', ()=>{
    console.log('Stop');
})
setInterval(()=>{
    socket.emit('status', '')
}, 1000)

