const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    fs.readFile('demo.txt',(err,data)=>{
        res.write(data)
        res.end()
    })

}).listen(3000,()=>console.log("Server started.."))