var fs = require('fs'),
    grains = ['wheat', 'rice', 'oats'],
    options = {encoding: 'utf8', flag: 'w'},
    fileWriteStream = fs.createWriteStream('grains.txt', options);

fileWriteStream.on('close', function(){
    console.log('file closed');
});

while(grains.length){
    var data = grains.pop() + " ";
    fileWriteStream.write(data);
    console.log("Wrote %s", data);
}
fileWriteStream.end();