let db = require('../config/connection');
const readEvent = (callback) => db.select('*').limit(3).get('tb_event', callback);
module.exports = { readEvent };