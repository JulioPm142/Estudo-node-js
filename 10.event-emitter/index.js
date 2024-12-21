const EventEmitter = require('events')

const myFirstEmitter= new EventEmitter

myFirstEmitter.on('greet',(name)=>{
    console.log(`hello ${name}`)
})

myFirstEmitter.emit('greet','Teste')