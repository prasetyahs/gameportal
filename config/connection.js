const QueryBuilder = require('node-querybuilder');
const settings = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "game"  
};
module.exports = new QueryBuilder(settings, 'mysql');