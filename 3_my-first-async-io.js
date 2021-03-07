let fs = require('fs')
const { fsyncSync } = require('node:fs')

fs.readFile(process.argv[2], "utf-8", function (err, data) {
    if (err) {
        console.log((err))
    }
    console.log(data.split('\n').length - 1)
})


