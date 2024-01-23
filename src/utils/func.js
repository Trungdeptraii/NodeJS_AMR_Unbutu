const Frame = require(`${__dirname}/../amr/frame.js`)
const Func = 
{
    compareData: (type="", data)=>{
        const dataRes = data.slice(16).toString("ascii");
        const dataResParse = JSON.parse(dataRes);
        return dataResParse
        if (dataResParse.err_msg) {
            console.log("Frame Error", dataResParse.err_msg);
        }
        const resF = Frame.create("res", 1, type, dataRes);
        const checkFrame = Buffer.compare(data, resF);
        if (checkFrame == 0) {
            return dataResParse;
        } else {
            console.log("Frame False");
        // logFrame(
        //     `Data[0]byte ${Buffer.byteLength(data, "hex")}`,
        //     data.toString("hex")
        // );
        // logFrame(
        //     `Data[1]byte ${Buffer.byteLength(resF, "hex")}`,
        //     resF.toString("hex")
        // );
        }
    },
    readDataAMR: function(_net, type, jsonData, show = true){
        Frame.write(_net, type, jsonData)
        if(show){
            return new Promise ((resolve, reject)=>{
                _net.once('data', (data)=>{
                    return resolve(Func.compareData(type, data))
                })
            })
        }else{
            _net.once('data', (data)=>{
                return Func.compareData(type, data)
            })
        }
    }
}
module.exports = Func