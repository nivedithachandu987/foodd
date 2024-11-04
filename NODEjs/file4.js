const fs=require('fs')
const data="Nodejs is non-blocking and Async application"
fs.appendFile('demo.txt',data,(err)=>{
    if(err){
        console.log("Nothing is updated, some error")
    }else{
        console.log("File updated..")
    }
})
//14-8-24
