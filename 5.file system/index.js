const { error } = require('console')
const fs = require('fs')

const path = require('path')

const dataFolder = path.join(__dirname, 'data')

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log('data folder created')
}

const filePath = path.join(dataFolder, 'example.txt')

fs.writeFileSync(filePath,'Hello from node js')
console.log('file created')

const readContentFromFIle = fs.readFileSync(filePath,'utf8')

console.log('file content: ',readContentFromFIle)

fs.appendFileSync(filePath, '\n this is a new line added to the file ')
console.log('New file content added')


const asyncFilePath = path.join(dataFolder, 'async example.txt')
fs.writeFile(asyncFilePath,'hello async node js',(err)=>{
    if(err)throw err;
    console.log('Async file created')

})

fs.readFile(filePath,'utf8',(err,data)=>{
    if(err)throw err;
    console.log('Assync file content', data)

    fs.appendFile(asyncFilePath, '\n this is another line added',(err)=>{
        if(err)throw err;
        

        fs.readFile(asyncFilePath, 'utf8',(err,updatedData)=>{
            if(err)throw err;
            console.log("Updated file", updatedData)
        })
    })
})