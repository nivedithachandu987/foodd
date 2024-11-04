const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    fs.readFile('demo.txt',(err,data)=>{
        res.writeHead(200,{
           // 'Content-Type':'text/plain'
            'Content-Type':'text/html'
        })
        res.write("<h1>" +data+"</h1><hr>")
        res.end()
    })

}).listen(3000,()=>console.log("Server started.."))