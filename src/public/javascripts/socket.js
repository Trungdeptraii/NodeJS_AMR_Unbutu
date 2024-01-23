// import {monitor, showToast, sidebar} from '/javascripts/define.js';
import { showToast, monitor, control } from './define.js';
export const socket = io('http://192.168.100.2:5500');
let {pathname} = window.location;

socket.on('disconnect', ()=>{
    console.log('Disconnect -->');
    showToast('Mất kết nối với server', 'error')
})
socket.on('error', ()=>{
    console.log('Error');
})
socket.on('connection', ()=>{
    console.log('connect ok');
})
// socket.on('started', (message)=>{
//     showToast(message);
// })

socket.on('result_api', (result)=>{
    control.result_api.innerHTML = result
})

socket.on('toast', ({message, type})=>{
    if(type == 'success'){
        showToast(message, 'success');
    }else if(type == 'error'){
        showToast(message, 'error');
    }else {
        showToast(message);
    }
})
socket.on('status', (statusAMR)=>{
    if(pathname === '/control/monitor'){
        monitor.speedSet.innerText = monitor.dataMonitor.vx;
        monitor.angleSet.innerText = monitor.dataMonitor.angle;
        monitor.speed.innerText = statusAMR.connectAMR ? `${Math.abs(statusAMR.vx)}` : 0
        monitor.confidence.innerText = statusAMR.connectAMR ? `${statusAMR.confidence}` : 0;
        monitor.battery.innerText = statusAMR.connectAMR ? `${(statusAMR.battery_level*100).toFixed(0)}` : 0;
        monitor.blocked.innerHTML = statusAMR.blocked ? `<b style="color:red">Yes</b>`: 'No';
        monitor.typeMonitorText.innerHTML = monitor.typeMonitorInput.checked ? "<b>Tự giữ</b>" : '<b>Nhấn giữ</b>'
    }else if(pathname === '/control'){
        let status_relocation = `<b>Không đọc được thông tin từ AMR</b>`;
        switch(statusAMR.reloc_status){
            case 0:
                status_relocation = `<b>Định vị thất bại</b>`;
                if(!control.form_confirm_location.submitForm){
                    control.form_confirm_location.submitForm.innerHTML = 
                    `
                        <b class="me-3">Gửi API xác nhận: </b>
                        <button class="btn btn-primary px-4">Gửi </button>
                    `
                }
                break;
            case 1:
                status_relocation = `<b>Xác nhận vị trí xong</b>`;
                control.form_confirm_location.innerHTML
                break;
            case 2:
                status_relocation = `<b>Đang định vị</b>`;
                break;
            case 3: 
                status_relocation = `<b>Định vị xong - Chờ confirm</b>`;
                if(!control.form_confirm_location.submitForm){
                    control.form_confirm_location.submitForm.innerHTML = 
                    `
                        <b class="me-3">Gửi API xác nhận: </b>
                        <button class="btn btn-primary px-4">Gửi </button>
                    `
                }
                break;
            default:
                status_relocation = status_relocation;

        }
        if(control.form_confirm_location.contentRelocation){
            control.form_confirm_location.contentRelocation.innerHTML = status_relocation;
        }
        if(control.confidence){
            control.confidence.innerHTML = statusAMR.connectAMR ? `<b>${statusAMR.confidence}</b>` : `<b>0</b>`;
            control.point_relocation.coordinates.innerHTML = `<b>x: 0.01, y: 0.02, angle: 0.03</b>`
        }
    }
})

function getStatus(){
    socket.emit('status', '');
}
setInterval(getStatus, 500)