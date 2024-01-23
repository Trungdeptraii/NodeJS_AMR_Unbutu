const status_all1 = [
    {"controller_temp": false},
    {"confidence": false},
    {"last_station": true},
    {"errors": true},
    {"warnings": true},
    {"current_station": true},
    {"target_id": true},
    {"controller_temp": false},
    {"controller_temp": false},
    {"controller_temp": false},
    {"controller_temp": false},
    {"is_stop": false},
    {"blocked": true},
    {"block_reason": false},
    {"battery_level": true},
    {"battery_temp": false},
    {"charging": true},
    {"path": false},
    {'current_ip': false},
    {'task_status': true},
    {'task_type': false},
    {'fork_height': true},
    {'slow down': false},
    {'slow_reason': false},
    {'emergency': true},
    {'target_point': false},
    {'finished_path': false},
    {'unfinished_path': true},
    {'confidence': true},
    {"vx": true},
    {"vy": true},
    {"reloc_status": true}
]

const objTrue = status_all1.filter(el=>(el[Object.keys(el)]===true));
const keyobjTrue = objTrue.reduce((key, el)=>{return [...key, ...Object.keys(el)]},[]);

module.exports = keyobjTrue;