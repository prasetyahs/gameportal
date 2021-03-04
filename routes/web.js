var express = require('express');
const { route } = require('../app');
var router = express.Router();


router.get('/', (req, res) => res.render('index'));
router.get('/index', (req, res) => res.render('index'));
router.get('/register', (req, res) => res.render('register'));
router.get('/rules', (req, res) => res.render('rules'));
router.get('/faq', (req, res) => res.render('faq'))
router.get('/donate', (req, res) => res.render('donate'));
router.get('*', (req, res) => res.end("ERROR NOT FOUND"));

module.exports = router;