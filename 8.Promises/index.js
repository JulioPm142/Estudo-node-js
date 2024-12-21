const { rejects } = require("assert");
const { resolve } = require("path");

function delayFn(time){
    return  new Promise((resolve=>setTimeout(resolve,time)))
}

console.log('Promise lecture starts')

delayFn(2000).then(()=> console.log('after 2 secondspromise resolved'))

console.log('end')

function Divide(num1,num2){
    return new Promise((resolve, reject )=>{
        if (num2===0){
            rejects('Not possible to divide by 0 ')
        }
        else{
            resolve(num1/num2)
        }
    })
} 

Divide(10,5)
    .then(result=>console.log(result))
    .catch(error=>console.log(error,'error'))

