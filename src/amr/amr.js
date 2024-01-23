const net = require("net");
const {readDataAMR} = require(`${__dirname}/../utils/func.js`);
const {
  status,
  navigation,
  control,
  config,
  other,
} = require(`${__dirname}/api.js`);
const keyStatus = require(`${__dirname}/fieldStatus.js`);

class AMR {
  constructor(host) {
    this.host = host;
    this.socket_status = net.Socket();
    this.socket_navigation = net.Socket();
    this.socket_configuaration = net.Socket();
    this.socket_control = net.Socket();
    this.socket_other = net.Socket();
    this.socket_push = net.Socket();
    this.connectAMR = false;
    this.toast = "";
  }
  connect() {
    this.socket_status.connect(19204, this.host);
    this.socket_status.setTimeout(5000);

    this.socket_navigation.connect(19206, this.host);
    this.socket_navigation.setTimeout(5000);

    this.socket_control.connect(19205, this.host);
    this.socket_control.setTimeout(5000);

    this.socket_other.connect(19210, this.host);
    this.socket_other.setTimeout(5000);

    this.socket_configuaration.connect(19207, this.host);
    this.socket_configuaration.setTimeout(5000);

    this.socket_push.connect(19301, this.host);
    this.socket_push.setTimeout(5000);

  }
  async navigation(target) {
    const type = navigation.robot_task_gotarget_req;
    const jsonNav = {
      task_id: Date.now().toString(),
    };
    jsonNav.id = target;
    const jsonData = JSON.stringify(jsonNav);
    const _net = this.socket_navigation;
    return await readDataAMR(_net, type, jsonData);
  }
  async status() {
    const type = status.robot_status_all1_req;
    const _net = this.socket_status;
    const jsonData = {
      keys: keyStatus,
      return_laser: false,
      return_beams3D: false,
    };
    return await readDataAMR(_net, type, jsonData);
  }
  async fork(value) {
    const type = other.robot_other_set_fork_height_req;
    const _net = this.socket_other;
    const jsonData = {
      height: value,
    };
    return await readDataAMR(_net, type, jsonData);
  }
  async setShelf() {
    const type = config.robot_config_set_shelfshape_req;
    const _net = this.socket_configuaration;
    const jsonData = { object_path: "shelf/s0002.shelf" };
    return await readDataAMR(_net, type, jsonData);
  }
  async unSetShelf() {
    const type = config.robot_config_clear_goodsshape_req;
    const _net = this.socket_configuaration;
    const jsonData = {};
    return await readDataAMR(_net, type, jsonData);
  }
  async siezeControl() {
    const type = config.robot_config_lock_req;
    const _net = this.socket_configuaration;
    const jsonData = { nick_name: "srd-seer-mizhan" };
    return await readDataAMR(_net, type, jsonData);
  }
  async relaseControl() {
    const type = config.robot_config_unlock_req;
    const _net = this.socket_configuaration;
    const jsonData = "";
    return await readDataAMR(_net, type, jsonData);
  }
  async monitor(option){
    const type = control.robot_control_motion_req;
    const _net = this.socket_control;
    const jsonData = option
    return await readDataAMR(_net, type, jsonData, false);
  }
  async pause(){
    const type = navigation.robot_task_pause_req;
    const _net = this.socket_navigation;
    const jsonData = '';
    return await readDataAMR(_net, type, jsonData);
  }
  async resume(){
    const type = navigation.robot_task_resume_req;
    const _net = this.socket_navigation;
    const jsonData = '';
    return await readDataAMR(_net, type, jsonData);
  }
  async cancel(){
    const type = navigation.robot_task_cancel_req;
    const _net = this.socket_navigation;
    const jsonData = '';
    return await readDataAMR(_net, type, jsonData);
  }
}
module.exports = AMR;
