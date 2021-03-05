var validator = require('validator');
const users = require("../model/Users.model");
const show = (res, data) => res.render('register', data);
const store = (req, res, data) => {
    let error;
    Object.keys(data).forEach((key) => {
        if (validator.isEmpty(data[key])) {
            error = "Value " + key + " required";
            return false;
        };
    });
    if (validator.isEmpty(error)) {
        users.addUsers(data, (err, response) => {
            if (err == null) {
                res.redirect('/register');
            }
        });
        res.redirect('/register', { err: "Success created Player", status: true });
    } else {
        alert(error);
        res.redirect('/register', { err: error, status: false });
    }
};
module.exports = { show, store };