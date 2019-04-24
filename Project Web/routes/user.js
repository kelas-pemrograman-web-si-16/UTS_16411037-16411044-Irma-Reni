var express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next){
    res.render('home')
})

router.get('/registrasi', function(req, res, next){
    res.render('registrasi')
})

router.get('/registrasidosen', function(req, res, next){
    res.render('registrasidosen')
})

router.get('/logindosen', function(req, res, next){
    res.render('logindosen')
})

router.get('/bantuan', function(req, res, next){
    res.render('bantuan')
})

router.get('/krs', function(req, res, next){
    res.render('krs')
})

router.get('/khs', function(req, res, next){
    res.render('khs')
})

router.get('/frs', function(req, res, next){
    res.render('frs')
})

router.get('/profil', function(req, res, next){
    res.render('profil')
})

router.get('/home2', function(req, res, next){
    res.render('home2')
})

module.exports = router;