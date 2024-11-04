const fs=require('fs')
console.log("Program Started..")
fs.readFile(__dirname+'/demo.txt','utf8',(err,data)=>{
    console.log(data)
})
console.log("Program ended..")