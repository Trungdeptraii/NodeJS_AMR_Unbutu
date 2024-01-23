const Robot = require(`${__dirname}/../amr/inital.js`);
let dem = 0
module.exports = {
    status: (req, res)=>{
        // res.status(200).json(Robot.status)
        // dem++;
        // console.log(dem);
        res.render("robot/status");
        // res.status(200).json({number: dem})

    }
}