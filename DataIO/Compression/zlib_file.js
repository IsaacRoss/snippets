var zlib = require('zlib'),
    gzip = zlib.createGzip(),
    fs = require('fs'),
    inFile = fs.createReadStream('zlib_file.js'),
    outFile = fs.createWriteStream('zlib_file.gz');

inFile.pipe(gzip).pipe(outFile);

setTimeout(function(){
    var gunzip = zlib.createUnzip({
        flush: zlib.Z_FULL_FLUSH
    });
    var inFile = fs.createReadStream('zlib_file.gz');
    var outFile = fs.createWriteStream('zlib_file.unzipped');
    inFile.pipe(gunzip).pipe(outFile);
}, 3000);

