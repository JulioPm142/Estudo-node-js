const fs = require('fs')
function person(name,callbackFn){
    console.log(`Hello ${name}`)
    callbackFn()
}

function address(){
    console.log('address')
}

person('teste',address)

fs.readFile('input.txt',"utf8",(err,data)=>{
    if(err){
        console.error('error reading',err)
        return
    }
    console.log(data)
})