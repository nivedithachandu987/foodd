const fs=require('fs')
fs.writeFile('demo.txt','Second file of file system',
    function(err){
        if(err){
            console.log('Some error')
        }else{
            console.log("File is created...")
        }
    }
)
//13-8-24