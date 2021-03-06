let db = require('../config/connection');
const readBanner = (callback) => db.select('*').get('tb_banner', callback);


module.exports = { readBanner };