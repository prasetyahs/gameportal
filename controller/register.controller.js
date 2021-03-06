var validator = require('validator');
const users = require("../model/Users.model");
let svgCaptcha = require('svg-captcha');
let cp;
const show = (res, req) => {
    let captcha = svgCaptcha.create();
    cp = captcha.text;
    res.render('register', { csrfToken: req.csrfToken(), "captcha": captcha.data, status: false, err: '' });
}
const reloadCaptcha = (res, req) => {
    let captcha = svgCaptcha.create();
    cp = captcha.text;
    res.send({ "captcha": captcha.data })
};

const store = (req, res) => {
    let error;
    Object.keys(req.body).forEach((key) => {
        if (validator.isEmpty(req.body[key])) {
            error = "Value " + key + " required";
            return false;
        };
    });
    if (error == undefined) {
        if (req.body['captcha'] == cp) {
            users.addUsers(req.body);
            res.redirect('/register', 200, { err: "Success created Player", status: true });
        }else{
            res.redirect('/register', 200, { err: "captcha does not match", status: true });
        }
    } else {
        res.redirect('/register', 200, { err: error, status: false });
    }
};
module.exports = { show, store, reloadCaptcha };