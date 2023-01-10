const express = require('express');

const router = express.Router();

const fs = require('fs');
router.get('/',(req, res, next)=>{
    fs.readFile('chat.txt',(err, data)=>{
        if(err){
            console.log(err);
            data= 'NO Chat Exists'
        }
        res.send(
            `${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        method="POST">
        <input id="message" name="message" type="text" placeholder="message">
            <input type="hidden" name="username" id='username'>
        <button type="submit">send</button>
        </form>`)
    })
})
router.post('/',(req, res ,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("chat.txt",`${req.body.username}:${req.body.message}${' '}`, {flag: 'a'} , (err)=>{
        err?console.log(err):res.redirect('/')
    }) 
})
module.exports = router;