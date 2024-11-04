const fs=require('fs')
fs.rename('demo.txt','demo1.txt',(err)=>{
    if (!err){
        console.log("file name is changed")
    }
    else{
        console.log("some error")
    }
})