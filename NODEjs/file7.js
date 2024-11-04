const fs=require('fs')
fs.rmdir('xyz',(err)=>{
    if(err){
        console.log("some error")
    }else{
        console.log("Directory/folder deleted..")
    }
})