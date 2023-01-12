const express = require('express');

const path = require('path')

const bodyParser = require('body-parser');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/contactus',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
    })

router.post('/success',(req, res ,next)=>{
    console.log(req.body);
    res.redirect('/success')

})


module.exports = router;