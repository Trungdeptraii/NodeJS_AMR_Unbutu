import {tag, control, showToast, tags, Fetch } from "../define.js";
import { socket } from "../socket.js";
let type_control = 'robot_control_loadmap_req';

control.switch_type.onchange =async function(){
    type_control = control.switch_type.value;
    if( type_control === 'robot_control_loadmap_req'){
        control.content.innerHTML = '';
        control.content.innerHTML = control[type_control];
        control.form_change_map.inputEl = tag('.map_name_input');
        control.form_change_map.btnClearInput = tag('.btn_clear_map_name');
        control.form_change_map.submitForm = tag('.form_map_name');
        control.form_change_map.btnClearInput.onclick = ()=>{
            control.form_change_map.inputEl.value = '';
        }
    }else if( type_control === 'robot_control_reloc_req'){
        control.content.innerHTML = '';
        control.content.innerHTML = control[type_control];

        control.form_relocation.nameEl = tag('.relocation_name')
        control.form_relocation.inputXEl = tag('.relocation_x');
        control.form_relocation.inputYEl = tag('.relocation_y');
        control.form_relocation.inputAngleEl = tag('.relocation_angle');
        control.form_relocation.inputRadiusEl = tag('.relocation_length');
        control.form_relocation.inputHomeEl = tag('.relocation_home');
        control.form_relocation.btnClearInputX = tag('.btn_remove_relocation_x');
        control.form_relocation.btnClearInputY = tag('.btn_remove_relocation_y');
        control.form_relocation.btnClearInputAngle = tag('.btn_remove_relocation_angle');
        control.form_relocation.btnClearInputLength = tag('.btn_remove_relocation_length');

        control.form_relocation.btnClearInputX.onclick = ()=>{
            control.form_relocation.inputXEl.value = '';
        }
        control.form_relocation.btnClearInputY.onclick = ()=>{
            control.form_relocation.inputYEl.value = '';
        }
        control.form_relocation.btnClearInputAngle.onclick = ()=>{
            control.form_relocation.inputAngleEl.value = '';
        }
        control.form_relocation.btnClearInputLength.onclick = ()=>{
            control.form_relocation.inputRadiusEl.value = '';
        }
        control.form_relocation.submitForm = tag('.form_relocation');
        control.point_relocation.list_point_render = tag('.list_point_relocation');

        //Form status relocation
        control.form_confirm_location.contentRelocation = tag('.control_reloc_status');
        control.form_confirm_location.submitForm = tag('.form_confirm_location');
        //Độ chính xác
        control.confidence = tag('.control-confidence');
        control.point_relocation.coordinates = tag('.control_coordinates');
        control.form_confirm_location.submitForm.onsubmit = (e)=>{
            type_control = 'robot_control_comfirmloc_req';
            e.preventDefault();
            socket.emit("control", {type_control, data: {}})
        }
        await control.point_relocation.fnDataRelocation();

        //Btn Exit Add Relocation
        control.point_relocation.btnAddRelocation = tag('.btn_add_relocation');
        control.point_relocation.overlayRelocation = tag('.overlay_show_add_relocation');
        control.point_relocation.btnEditAddRelocation = tag('.btn_exit_add_relocation');
        control.point_relocation.btnEditAddRelocation.onclick = ()=>{
            control.point_relocation.overlayRelocation.classList.remove('active');
            control.point_relocation.fnClearInput();
        }
        //Add Relocation
        control.point_relocation.addRelocation = tag('.add_point_relocation');
        control.point_relocation.addRelocation.onclick = () =>{
            control.point_relocation.btnAddRelocation.innerText = 'Add';
            control.point_relocation.overlayRelocation.classList.add('active');
        }
        //Form relocation
        control.form_relocation.submitForm.onsubmit = async(e)=>{
            e.preventDefault();
            let name = control.form_relocation.nameEl.value;
            let x = control.form_relocation.inputXEl.value;
            let y = control.form_relocation.inputYEl.value;
            let angle = control.form_relocation.inputAngleEl.value;
            let length = control.form_relocation.inputRadiusEl.value;
            if(!name){
                return showToast('Vui long nhap ten Relocation', 'error');
            }
            if(!x){
                return showToast('Vui long nhap toa do x', 'error');
            }
            if(!y){
                return showToast('Vui long nhap toa do y', 'error');
            }
            let data = {name, x, y};
            if(angle){data["angle"] = +angle};
            if(length){data["length"] = +length};
            let resultAPI;
            if(control.point_relocation.btnAddRelocation.innerText == 'Add'){
                resultAPI = await Fetch('POST', data);
            }else if(control.point_relocation.btnAddRelocation.innerText == 'Update'){

                resultAPI = await Fetch('PATCH', data, control.point_relocation.idUpdate);
            }
            if(resultAPI){
                showToast('Da them diem thanh cong', 'success');
                control.point_relocation.fnClearInput();
                await control.point_relocation.fnDataRelocation();
                control.point_relocation.overlayRelocation.classList.remove('active')
                control.point_relocation.btnAddRelocation.innerText = 'Add'
            }
        }
    }else if(type_control === 'robot_control_comfirmloc_req'){
        control.content.innerHTML = '';
        control.content.innerHTML = control[type_control];
        control.form_confirm_location.contentRelocation = tag('.control_reloc_status');
        control.form_confirm_location.submitForm = tag('.form_confirm_location');

        control.form_confirm_location.submitForm.onsubmit = (e)=>{
            e.preventDefault();
            socket.emit("control", {type_control, data: {}})
        }
    }
    control.result_api.innerHTML = '';
}

//Form map_name
control.form_change_map.btnClearInput.onclick = ()=>{
    control.form_change_map.inputEl.value = '';
}
control.form_change_map.submitForm.onsubmit = (e)=>{
    e.preventDefault();
    let map_name = control.form_change_map.inputEl.value;
    if(!map_name){
        showToast('Vui lòng nhập map_name !!!', 'error')
        return
    }
    socket.emit(`control`, {type_control, data: map_name})
}


