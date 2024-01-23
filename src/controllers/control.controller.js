const Robot = require(`${__dirname}/../amr/inital.js`);
const {control} = require(`${__dirname}/../amr/api.js`);
const {readDataAMR} = require(`${__dirname}/../utils/func.js`);
module.exports = {
    monitor: async (req, res)=>{
        const {vx, vy} = req.body;
        res.status(200).json(Robot.monitor({vx, vy}))
    },
    handleMonitor: async(req, res)=>{
        res.render('robot/control/monitor')
    },
    index: async (req, res)=>{
        let name = req.flash("name");
        res.render("robot/control/index");
    },
    handleIndex: async (req, res)=>{
        let field = "robot_control_loadmap_req"
        const _net = Robot.socket_control;
        let type = control[field];
        let data = JSON.stringify(req.body);
        if(!req.body.map_name){
            res.redirect("/control")
            return Robot.toast = "Vui lòng nhập map_name";
        }
        res.redirect("/control")
        Robot.toast = "Đã thêm toaast";
    }
}