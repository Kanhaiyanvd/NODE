const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    const url= req.url
    res.setHeader('Content-Type','text/html');

    if(url=='/home'){
        res.write('Welcome Home');
        res.end();
       }
    else if(url=='/about'){
        res.write('Welcome to about us page');
        res.end();
        }
    else if(url=='/node'){
            res.write('Welcome to my node.js project');
            res.end();
            }
    res.end();
    
})
server.listen(port, hostname , ()=>{
    console.log(`server is running at http://${hostname}:${port}/`)
});
