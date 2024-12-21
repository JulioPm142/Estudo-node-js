const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error on reading', err)
        return
    }

    const modifyFileData = data.toUpperCase();
    fs.writeFile('Output.txt', modifyFileData, (err) => {
        if (err) {
            console.error('Error while writing file', err)
            return
        }
        console.log('data writen to the new file')

        fs.readFile('Output.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file ', err)
                return
            }
            console.log(data)
        })

    })
})