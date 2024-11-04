const fs=require('fs')
//14-8-24
fs.unlink('demo1.txt',(err)=>{
    if(err){
        console.log("some error")

    }
    else{
        console.log("file is deleted")
    }
})