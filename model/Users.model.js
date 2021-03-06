let db = require('../config/connection');

const addUsers = (data, callback) => {
    return db.returning('id_users').insert('tb_users', {
        username: data['username'], password: data['password'],
        email: data['email'], gender: data['gender'], birth: data['birth'],
        code_pin: data['pin_code']
    }, callback);

};
module.exports = { addUsers };