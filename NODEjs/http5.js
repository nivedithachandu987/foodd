const http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("Home page")
        res.end()
    }else if(req.url=='/about'){
        res.write("About us page")
        res.end()
    }else{
        res.write("Invalid pag")
        res.end()
    }
}).listen(3000,()=>console.log("server started.."))