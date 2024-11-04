const fs=require('fs')
console.log("Program Started..")

var data=fs.readFileSync('demo.txt')
console.log(data.toString())

console.log("Program Ended..")