module.exports ={
    create: ( check = "req", reqId, msgType, msg = {})=>{
        let jsonStr = typeof msg === "string" ? msg : JSON.stringify(msg);
        if (check === "req") {
            let msgLen = 0;
            if (msg != {}) {
            msgLen = Buffer.byteLength(jsonStr, 'ascii');
            }
            const buffData = Buffer.from(jsonStr);
            const buffHeader = Buffer.alloc(16);
            buffHeader.writeInt8(0x5a, 0);
            buffHeader.writeInt8(0x01, 1);
            buffHeader.writeInt16BE(reqId, 2);
            buffHeader.writeInt32BE(msgLen, 4);
            buffHeader.writeInt16BE(msgType.req, 8);
            const data = Buffer.concat([buffHeader, buffData]);
            return data;
        }
        if (check === "res") {
            let msgLen = 0;
            if (msg != {}) {
            msgLen = Buffer.byteLength(jsonStr, "ascii");
            console.log(msgLen);
            }
            const buffData = Buffer.from(jsonStr);
            const buffHeader = Buffer.alloc(16);
            buffHeader.writeInt8(0x5a, 0);
            buffHeader.writeInt8(0x01, 1);
            buffHeader.writeInt16BE(reqId, 2);
            buffHeader.writeInt32BE(msgLen, 4);
            buffHeader.writeInt16BE(msgType.res, 8);
            buffHeader.writeInt16BE(msgType.req, 10);
            const data = Buffer.concat([buffHeader, buffData]);
            return data;
        }
    },
    write: function(_net, type, jsonData){
        const frame = this.create("req", 1, type, jsonData);
        _net.write(frame);
    }
}