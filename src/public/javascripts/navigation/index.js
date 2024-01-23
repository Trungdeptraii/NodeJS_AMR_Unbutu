import { showToast, navigation, tag, control } from "../define.js";
import { socket } from "../socket.js";
import { render_navigation } from "./render.navigation.js";

let type_navigation = 'robot_task_gotarget_req';

navigation.type_navigation.onchange = ()=>{
    type_navigation = navigation.type_navigation.value;
    if(type_navigation == 'robot_task_gotarget_req'){
        navigation.content_navigation.innerHTML = '';
        navigation.content_navigation.innerHTML = render_navigation[type_navigation];
        navigation.formGoNav.navigation_inputEl = tag('.navigation_id_input');
        navigation.formGoNav.navigation_btnClear = tag('.btn_navigation_clear');
        navigation.formGoNav.navigation_btnStop = tag('.btn_navigation_stop');
        navigation.formGoNav.navigation_btnResume = tag('.btn_navigation_resume');
        navigation.formGoNav.navigation_btnCancel = tag('.btn_navigation_cancel');

        navigation.formGoNav.navigation_btnStop.onclick = ()=>{
            socket.emit('navigation', {type_navigation: 'robot_task_pause_req'})
        }
        navigation.formGoNav.navigation_btnResume.onclick = ()=>{
            socket.emit('navigation', {type_navigation: 'robot_task_resume_req'})
        }
        navigation.formGoNav.navigation_btnCancel.onclick = ()=>{
            socket.emit('navigation', {type_navigation: 'robot_task_cancel_req'})
        }

    }
}
navigation.formGoNav.navigation_btnClear.onclick = ()=>{
    navigation.formGoNav.navigation_inputEl.value = '';
}
navigation.formGoNav.navigation_btnStop.onclick = ()=>{
    control.result_api.innerHTML = '';
    socket.emit('navigation', {type_navigation: 'robot_task_pause_req', data: ''})
}
navigation.formGoNav.navigation_btnResume.onclick = ()=>{
    control.result_api.innerHTML = '';
    socket.emit('navigation', {type_navigation: 'robot_task_resume_req', data: ''})
}
navigation.formGoNav.navigation_btnCancel.onclick = ()=>{
    control.result_api.innerHTML = '';
    socket.emit('navigation', {type_navigation: 'robot_task_cancel_req', data: ''})
}
navigation.formGoNav.submitForm.onsubmit = (e)=>{
    e.preventDefault();
    let pointNav = navigation.formGoNav.navigation_inputEl.value;
    if(!pointNav){
        return showToast('Vui lòng nhập điểm di chuyển', 'error');
    }
    if(!pointNav.startsWith('LM')){
        return showToast("Điểm di chuyển bắt đầu bằng LM", "error");
    }
    control.result_api.innerHTML = '';
    socket.emit('navigation', {type_navigation, data: {id: pointNav}})
}