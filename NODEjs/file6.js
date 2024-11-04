const fs=require('fs')
fs.mkdir('xyz',(err)=>{
    if(!err){
        console.log("Directory/folder created..")
    }else{
        console.log("some error")
    }
})