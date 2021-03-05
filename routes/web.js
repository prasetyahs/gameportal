let express = require('express');
let router = express.Router();
let svgCaptcha = require('svg-captcha');
let usersController = require('../controller/register.controller');
router.get('/', (req, res) => {
    res.render('index', { csrfToken: req.csrfToken() })
})
router.get('/index', (req, res) => res.render('index', { csrfToken: req.csrfToken() }));

//register
router.get('/register', (req, res) => {
    let captcha = svgCaptcha.create();
    usersController.show(res, { csrfToken: req.csrfToken(), "captcha": captcha.data, status: false, err: '' });
});
router.post('/usersregister', (req, res) => usersController.store(req, res, req.body));


//get request
router.get('/forgetpassword', (req, res) => res.send("forget"));
router.get('/rules', (req, res) => res.render('rule', { csrfToken: req.csrfToken() }));
router.get('/faq', (req, res) => res.render('faq', { csrfToken: req.csrfToken() }))
router.get('/donate', (req, res) => res.render('donate', { csrfToken: req.csrfToken() }));
router.get('/reloadcaptcha', (req, res) => res.send({ "captcha": svgCaptcha.create().data }));
router.get('*', (req, res) => res.end("ERROR NOT FOUND"));
//post request
router.post('*', (req, res) => res.end("ERROR NOT FOUND"));

module.exports = router;