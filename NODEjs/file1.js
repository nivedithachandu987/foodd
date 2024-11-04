const fs=require('fs')
fs.readFile(__dirname+"/demo.txt",'utf8',
    function(error,data){
        if (error){
            console.log("some error")
        }
        else{
            console.log(data)
        }
    }
)
//13-8-24