const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    fs.readFile('web.html',(err,data)=>{
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log("Server stated.."))