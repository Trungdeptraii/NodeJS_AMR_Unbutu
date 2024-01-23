export const tag = (tag)=>document.querySelector(tag);
export const tags = (tag)=>document.querySelectorAll(tag);
import { socket } from "/javascripts/socket.js";
import { render_control as renderControl } from "./control/render_control.js";
export const monitor = {
    top: tag('.arrow-top'),
    topMove: false,
    bottomMove: false,
    leftMove: false,
    rightMove: false,
    removeMove: '',
    left: tag('.arrow-left'),
    stop: tag('.arrow-stop'),
    right: tag('.arrow-right'),
    bottom: tag('.arrow-bottom'),
    form: tag('.form-monitor'),
    overlay: tag('.overlay'),
    save: tag('.monitor-save'),
    exit: tag('.monitor-exit'),
    showSetting: tag('.setting-monitor'),
    speedSet: tag('.monitor-speed-set'),
    angleSet: tag('.monitor-angle-set'),
    battery: tag('.monitor-battery'),
    confidence: tag('.monitor-confidence'),
    speed: tag('.monitor-speed'),
    blocked: tag('.monitor-blocked'),
    typeMonitorInput: tag('.typeMonitor'),
    typeMonitorText: tag('.typeMonitorText'),
    dataMonitor: {
        vx: 0.2,
        vy: 0,
        w: 0.17,
        angle: 10
    },
    fnTien: ()=>{
        let {vx, vy, w} = monitor.dataMonitor;
        if(!monitor.typeMonitorInput.checked && !monitor.topMove){
            monitor.topMove = true;
            monitor.fnChange('top', '#00ebf3', '#4347e5');
            socket.emit("monitor",{vx: vx, vy: vy, duration: 0});
        }else if(monitor.typeMonitorInput.checked){
            if(!monitor.topMove){
                monitor.topMove = true;
                monitor.fnChange('top', '#00ebf3', '#4347e5');
                if(monitor.rightMove){
                    socket.emit("monitor",{vx: vx, vy: vy, w: w, duration: 0});
                }else if(monitor.leftMove){
                    socket.emit("monitor",{vx: vx, vy: vy, w: w, duration: 0});
                }else{
                    socket.emit("monitor",{vx: vx, vy: vy, duration: 0});
                }
            }else if(monitor.topMove){
                monitor.fnStopMonitor('top');
            }
        }
    },
    fnLui: ()=>{
        let {vx, vy, w} = monitor.dataMonitor;
        if(!monitor.typeMonitorInput.checked && !monitor.bottomMove){
            monitor.bottomMove = true;
            monitor.fnChange('bottom', '#00ebf3', '#4347e5');
            socket.emit("monitor",{vx: -vx, vy: vy, duration: 0});
        }else if(monitor.typeMonitorInput.checked){
            if(!monitor.bottomMove){
                monitor.bottomMove = true;
                monitor.fnChange('bottom', '#00ebf3', '#4347e5');
                if(monitor.rightMove){
                    socket.emit("monitor",{vx: -vx, vy: vy, w: -w, duration: 0});
                }else if(monitor.leftMove){
                    socket.emit("monitor",{vx: -vx, vy: vy, w: -w, duration: 0});
                }else{
                    socket.emit("monitor",{vx: -vx, vy: vy, duration: 0});
                }
                
            }else if(monitor.bottomMove){
                monitor.fnStopMonitor('bottom');
            }
        }
    },
    fnTrai: ()=>{
        let {vx, vy, w} = monitor.dataMonitor;
        if(!monitor.typeMonitorInput.checked && !monitor.leftMove){
            monitor.leftMove = true;
            monitor.fnChange('left', '#00ebf3', '#4347e5');
            socket.emit("monitor",{vx: 0, vy: 0, w: w, duration: 0});
        }else if(monitor.typeMonitorInput.checked){
            if(!monitor.leftMove){
                monitor.leftMove = true;
                monitor.fnChange('left', '#00ebf3', '#4347e5');
                if(monitor.topMove){
                    socket.emit("monitor",{vx: vx, vy: vy, w: w, duration: 0});
                }else if(monitor.bottomMove){
                    socket.emit("monitor",{vx: -vx, vy: vy, w: w, duration: 0});
                }else{
                    socket.emit("monitor",{vx: 0, vy: 0, w: w, duration: 0});
                }
            }else if(monitor.leftMove){
                monitor.fnStopMonitor('left');
            }
        }
    },
    fnPhai: ()=>{
        let {vx, vy, w} = monitor.dataMonitor;
        if(!monitor.typeMonitorInput.checked && !monitor.rightMove){
            monitor.rightMove = true;
            monitor.fnChange('right', '#00ebf3', '#4347e5');
            socket.emit("monitor",{vx: 0, vy: 0, w: -w, duration: 0});
        }else if(monitor.typeMonitorInput.checked){
            if(!monitor.rightMove){
                monitor.rightMove = true;
                monitor.fnChange('right', '#00ebf3', '#4347e5');
                if(monitor.topMove){
                    socket.emit("monitor",{vx: vx, vy: vy, w: -w, duration: 0});
                }else if(monitor.bottomMove){
                    socket.emit("monitor",{vx: -vx, vy: vy, w: -w, duration: 0});
                }else{
                    socket.emit("monitor",{vx: 0, vy: 0, w: -w, duration: 0});
                }
            }else if(monitor.rightMove){
                monitor.fnStopMonitor('right');
            }
        }
    },
    fnStop: ()=>{
        monitor["stop"].style.color = '#ff5500';
        monitor.fnStopMonitor();
    },
    fnStopMonitor: (removeMove)=>{
        if(!monitor.typeMonitorInput.checked){
            if(removeMove == 'top'){
                monitor.topMove = false;
                monitor.fnChange('top', '#ebf1f1', '#898888');
            } else if(removeMove == 'bottom'){
                monitor.bottomMove = false;
                monitor.fnChange('bottom', '#ebf1f1', '#898888');
            } else if(removeMove == 'left'){
                monitor.leftMove = false;
                monitor.fnChange('left', '#ebf1f1', '#898888');
                monitor.fncheckMove();
            } else if(removeMove == 'right'){
                monitor.rightMove = false;
                monitor.fnChange('right', '#ebf1f1', '#898888');
                monitor.fncheckMove();
            }
            else{
                monitor.topMove = false;
                monitor.fnChange('top', '#ebf1f1', '#898888');
                monitor.bottomMove = false;
                monitor.fnChange('bottom', '#ebf1f1', '#898888');
                monitor.leftMove = false;
                monitor.fnChange('left', '#ebf1f1', '#898888');
                monitor.rightMove = false;
                monitor.fnChange('right', '#ebf1f1', '#898888');
            }
            socket.emit("monitor",{vx: 0, vy: 0});
        }else if(monitor.typeMonitorInput.checked){
            if(removeMove == 'top'){
                monitor.topMove = false;
                monitor.fnChange('top', '#ebf1f1', '#898888');
                monitor.fncheckMove();
            } else if(removeMove == 'bottom'){
                monitor.bottomMove = false;
                monitor.fnChange('bottom', '#ebf1f1', '#898888');
                monitor.fncheckMove();
            } else if(removeMove == 'left'){
                monitor.leftMove = false;
                monitor.fnChange('left', '#ebf1f1', '#898888');
                monitor.fncheckMove();
            } else if(removeMove == 'right'){
                monitor.rightMove = false;
                monitor.fnChange('right', '#ebf1f1', '#898888');
                monitor.fncheckMove();
            } else{
                monitor.topMove = false;
                monitor.fnChange('top', '#ebf1f1', '#898888');
                monitor.bottomMove = false;
                monitor.fnChange('bottom', '#ebf1f1', '#898888');
                monitor.leftMove = false;
                monitor.fnChange('left', '#ebf1f1', '#898888');
                monitor.rightMove = false;
                monitor.fnChange('right', '#ebf1f1', '#898888');
                socket.emit("monitor",{vx: 0, vy: 0});
            }

        }
    },
    fnChange: (el, bg, color)=>{
        monitor[el].style.backgroundColor = bg;
        monitor[el].style.color = color;
    },
    fncheckMove: ()=>{
        let {vx, vy, w} = monitor.dataMonitor;
        if(monitor.topMove){
            socket.emit("monitor",{vx: vx, vy: 0, duration: 0});
        }else if(monitor.bottomMove){
            socket.emit("monitor",{vx: -vx, vy: 0, w: w,  duration: 0});
        }else if(monitor.leftMove){
            socket.emit("monitor",{vx: 0, vy: 0, w: w,  duration: 0});
        }else if(monitor.rightMove){
            socket.emit("monitor",{vx: 0, vy: 0, w: -w,  duration: 0});
        }else{
            socket.emit("monitor",{vx: 0, vy: 0});
        }
    }
}
export const sidebar = {
    home: tag('.nav-list .sidebar_home'),
    status: tag('.nav-list .sidebar_status'),
    control: tag('.nav-list .sidebar_control')
}
export const showToast = (message, type) =>{
    let border = '#b7b7b6';
    if(type == 'success'){
        border = 'green'
    }else if(type == 'error'){
        border = 'red'
    }
    Toastify({
        text: message,
        duration: 3000,
        style: {
            background: "#0d90ed",
            color: 'white',
            // border: '1px solid blue',
            'border-left': `4px solid ${border}`,
            'font-weight': 600,
            'box-shadow': '0px 0px 2px 1px #cfcec9',
            'border-radius': '5px'

        },
        gravity: "top",
        position: "center",
    }).showToast();
}
export const control = {
    switch_type: tag('.type_control'),
    content : tag('.control-content'),
    show_result: tag('.control-result'),
    confidence: tag('.control-confidence'),
    form_change_map: {
        inputEl: tag('.map_name_input'),
        btnClearInput: tag('.btn_clear_map_name'),
        submitForm: tag('.form_map_name')
    },
    form_relocation: {
        nameEl: tag('.relocation_name'),
        inputXEl: tag('.relocation_x'),
        inputYEl: tag('.relocation_y'),
        inputAngleEl: tag('.relocation_angle'),
        inputRadiusEl: tag('.relocation_length'),
        inputHomeEl: tag('.relocation_home'),
        btnClearInputX: tag('.btn_remove_relocation_x'),
        btnClearInputY: tag('.btn_remove_relocation_y'),
        btnClearInputAngle: tag('.btn_remove_relocation_angle'),
        btnClearInputLength: tag('.btn_remove_relocation_length'),
        btnClearInputHome: tag('.btn_remove_relocation_home'),
        submitForm: tag('.form_relocation'),
    },
    form_confirm_location: {
        contentRelocation: tag('.control_reloc_status'),
        submitForm: tag('.form_confirm_location')
    },
    point_relocation: {
        list_point_render: tag('.list_point_relocation'),
        coordinates: tag('.control_coordinates'),
        addRelocation: tag('.add_point_relocation'),
        btnEditAddRelocation: tag('.btn_exit_add_relocation'),
        overlayRelocation: tag('.overlay_show_add_relocation'),
        btnAddRelocation: tag('.btn_add_edit'),
        btnUpdateRelocation: tag('.btn_update_relocation'),
        idUpdate: 0,
        fnCreateChild: ({el, parent})=>{
            let data = {x: el.x, y: el.y, angle: el.angle};
            let col = document.createElement('li');

            let nameItem = document.createElement('span');
            nameItem.className = 'name-item';
            nameItem.innerHTML = `<b>${el.name}</b>`;
            let pre = document.createElement('pre');
            pre.innerHTML = JSON.stringify(data);
            col.append(nameItem);
            col.append(pre);

            let listBtnRelocation = document.createElement('div');
            listBtnRelocation.className = 'list-btn-relocation d-flex gap-1';

            let btnRelocation = document.createElement('button');
            btnRelocation.className = `btn_send_ponit_relocation btn btn-success`;
            btnRelocation.dataset.id = el.id;
            btnRelocation.innerText = 'Relocation';
            let btnEdit = document.createElement('button');
            btnEdit.className = `btn btn-primary btn_edit_ponit_relocation`;
            btnEdit.dataset.id = el.id;
            btnEdit.innerText = 'Sửa';
            let btnDelete = document.createElement('button');
            btnDelete.className = `btn btn-danger btn_delete_ponit_relocation`;
            btnDelete.dataset.id = el.id;
            btnDelete.innerText = 'Xóa';

            listBtnRelocation.append(btnRelocation);
            listBtnRelocation.append(btnEdit);
            listBtnRelocation.append(btnDelete);

            col.append(listBtnRelocation);

            parent.append(col)
        },
        fnDataRelocation: async()=>{
            let result = await Fetch('GET')
            control.point_relocation.list_point_render.innerHTML = '';
            if(result.length){
                result.forEach((el)=>{
                    control.point_relocation.fnCreateChild({el: el, parent: control.point_relocation.list_point_render})
                });
                control.point_relocation.arrbtnWiew = tags('.btn_view_ponit_relocation');
                control.point_relocation.arrbtnRelocation = tags('.btn_send_ponit_relocation');
                control.point_relocation.arrbtnEdit = tags('.btn_edit_ponit_relocation');
                control.point_relocation.arrbtnDelete = tags('.btn_delete_ponit_relocation');
                if(control.point_relocation.arrbtnRelocation.length){
                    control.point_relocation.arrbtnRelocation.forEach((el)=>{
                        el.onclick = function(){
                            let {id} = this.dataset;
                            socket.emit('control', {type_control: 'relocation_point', data: id})
                        }
                    })
                }
                if(control.point_relocation.arrbtnDelete.length){
                    control.point_relocation.arrbtnDelete.forEach((el)=>{
                        el.onclick = async function(){
                            let {id} = this.dataset;
                            let result = await Fetch('DELETE', '', id);
                            if(result){
                                await control.point_relocation.fnDataRelocation();
                                showToast('Da xoa thanh cong', 'success');
                            }
                        }
                    })
                }
                if(control.point_relocation.arrbtnEdit.length){
                    control.point_relocation.arrbtnEdit.forEach((el)=>{
                        el.onclick = async function(){
                            let {id} = this.dataset;
                            let {name, x, y, angle, length} = await Fetch('GET', '', id);
                            control.form_relocation.nameEl.value = name;
                            control.form_relocation.inputXEl.value = x;
                            control.form_relocation.inputYEl.value = y;
                            control.form_relocation.inputAngleEl.value = angle ? angle : 0;
                            control.form_relocation.inputRadiusEl.value = length ? length : "";
                            control.point_relocation.btnAddRelocation.innerHTML = 'Update';
                            control.point_relocation.idUpdate = id;
                            control.point_relocation.overlayRelocation.classList.add('active');
                        }
                    })
                }
            }
        },
        fnClearInput: ()=>{
            control.form_relocation.nameEl.value = '';
            control.form_relocation.inputXEl.value = '';
            control.form_relocation.inputYEl.value = '';
            control.form_relocation.inputAngleEl.value = '';
            control.form_relocation.inputRadiusEl.value = '';
        },
        arrbtnWiew: '',
        arrbtnRelocation: '',
        arrbtnEdit: '',
        arrbtnDelete: '',
    },
    result_api: tag('.result_api'),
    robot_control_loadmap_req : renderControl.robot_control_loadmap_req,
    robot_control_reloc_req:  renderControl.robot_control_reloc_req,
    robot_control_comfirmloc_req: renderControl.robot_control_comfirmloc_req
}
export const navigation = {
    type_navigation: tag('.type_navigation'),
    formGoNav: {
        submitForm: tag('.form_navigation_go'),
        navigation_inputEl: tag('.navigation_id_input'),
        navigation_btnClear: tag('.btn_navigation_clear'),
        navigation_btnStop: tag('.btn_navigation_stop'),
        navigation_btnResume: tag('.btn_navigation_resume'),
        navigation_btnCancel: tag('.btn_navigation_cancel')
    },
    content_navigation: tag('.navigation-content')
}
export const Fetch = async function Fetch(method, data, id = '') {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let subpath = ``;
    var raw = JSON.stringify(data);
    const requestOptions = {
      method: method,
      headers: myHeaders,
      body: method == 'POST' || method == 'PATCH' ? raw : null,
      redirect: "follow",
    };
    try {
      const res = await fetch(
        `http://localhost:5600/relocation/${id}`,
        requestOptions
      );
      if(res.ok){
        const data = await res.json();
        return data;
      }else{
        return false
      }
    } catch (error) {
      console.log('err Fetch',error);
      return false
    }
  }