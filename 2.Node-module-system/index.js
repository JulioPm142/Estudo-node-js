
const firstmodule = require('./first-module');

console.log(firstmodule.add(1,2));

try{
    console.log('div por zero')
    let result=firstmodule.div(0,0)
    console.log(result,' result')

}catch(error){
    console.log('Caught an error',error.message)
}

//module wrapper

// (
//     function(exports, require, module, __filename,__dirname){

//     }
// )