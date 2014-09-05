var fs = require('fs'),
    options = {encoding:'utf8', flag: 'r'},
    fileReadStream = fs.createReadStream('grains.txt', options);

fileReadStream.on('data', function(chunk){
    console.log("Grains: %s", chunk);
    console.log("Read %d bytes of data.", chunk.length);
});

fileReadStream.on('close', function(){
    console.log("File closed");
});

