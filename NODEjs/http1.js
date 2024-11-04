//http module=>core module
const http=require('http')
http.createServer((req,res)=>{
    res.write("Welcome to server side coding")
    res.end()
}).listen(3000,()=>console.log("Server started..."))