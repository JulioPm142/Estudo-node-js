const { error } = require("console")

function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve, time))
}

async function delayedGreet(name) {
    await delayFn(2000)
    console.log(name)
    
}

delayedGreet("AAAAAA")

async function division(num1,num2) {
    try{
        if (num2===0) throw new Error('cant divide by 0 ')
        return num1/num2

    }catch(error){
        console.error("Error: ",error)
    }
    
}

async function mainFn() {
    console.log(await division(10,2))
    console.log(await division(10,0))
}

mainFn()