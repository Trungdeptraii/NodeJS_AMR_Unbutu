const Robot = require(`${__dirname}/../amr/inital.js`);

module.exports = {
    index: (req, res)=>{
        res.render("robot/navigation/index")
    },
    navigation: async (req, res)=>{
        let {id} = req.body;
        res.status(200).json(await Robot.navigation(`LM${id}`))
    },
    typeNav: async (req, res) =>{
        let {pause, resume, cancel} = req.body;
        console.log(req.body);
        if(pause){
            res.status(200).json(await Robot.pause())
        }else if(resume){
            res.status(200).json(await Robot.resume())
        }else if(cancel){
            res.status(200).json(await Robot.cancel())
        }
    },
}