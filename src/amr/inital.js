const AMR = require(`${__dirname}/amr.js`);
const IPAMR = process.env.IPAMR;
module.exports = new AMR(IPAMR)