let express = require('express');
let router = express.Router();
let usersController = require('../controller/register.controller');
let indexController = require('../controller/index.controller');
router.get('/', (req, res) => indexController.show(res, req));
router.get('/index', (req, res) => res.render('index', { csrfToken: req.csrfToken() }));

router.get('/register', (req, res) => usersController.show(res, req));
router.post('/usersregister', (req, res) => usersController.store(req, res, req.body));

router.get('/reloadcaptcha', (req, res) => usersController.reloadCaptcha(res, req));

router.get('*', (req, res) => res.end("ERROR NOT FOUND"));
router.post('*', (req, res) => res.end("ERROR NOT FOUND"));

module.exports = router;