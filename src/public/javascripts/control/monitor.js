// import {monitor, showToast} from '/javascripts/define.js';
import { monitor, showToast } from "../define.js";

monitor.top.addEventListener('mousedown', monitor.fnTien);
monitor.top.addEventListener('mouseup', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('top')}});
monitor.top.addEventListener('touchstart', monitor.fnTien);
monitor.top.addEventListener('touchend', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('top')}});

monitor.bottom.addEventListener('mousedown', monitor.fnLui);
monitor.bottom.addEventListener('mouseup', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('bottom')}});
monitor.bottom.addEventListener('touchstart', monitor.fnLui);
monitor.bottom.addEventListener('touchend', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('bottom')}});

monitor.left.addEventListener('mousedown', monitor.fnTrai);
monitor.left.addEventListener('mouseup', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('left')}});
monitor.left.addEventListener('touchstart', monitor.fnTrai);
monitor.left.addEventListener('touchend', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('left')}});

monitor.right.addEventListener('mousedown', monitor.fnPhai);
monitor.right.addEventListener('mouseup', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('right')}});
monitor.right.addEventListener('touchstart', monitor.fnPhai);
monitor.right.addEventListener('touchend', ()=>{if(!monitor.typeMonitorInput.checked){monitor.fnStopMonitor('right')}});

monitor.stop.addEventListener('mousedown', monitor.fnStop);
monitor.stop.addEventListener('mouseup', ()=>{
    monitor.stop.style.color = '#635d5a';
});
monitor.stop.addEventListener('touchstart', monitor.fnStop);
monitor.stop.addEventListener('touchend', ()=>{
    monitor.stop.style.color = '#635d5a';
});

monitor.form.onsubmit = (e)=>{
    e.preventDefault();
    let speedEl = Number.parseFloat(e.target[0].value);
    let angleEl = Number(e.target[1].value);
    let angle = Number((angleEl * Math.PI /180).toFixed(2));
    if(speedEl > 1.0){
        showToast('[Lỗi]: Tốc độ chạy phải nhỏ hơn 1 - hãy thử lại');
        return
    }
    monitor.dataMonitor.vx = speedEl;
    monitor.dataMonitor.w = angle;
    monitor.dataMonitor.angle = angleEl;
    monitor.overlay.classList.remove('active');
}
monitor.exit.onclick = ()=>{
    monitor.overlay.classList.remove('active');
}
monitor.showSetting.onclick = ()=>{
    monitor.overlay.classList.add('active');
}
// document.oncontextmenu = new Function("return false")