var fs = require('fs'),
    options = {encoding: 'utf8', flag: 'r'};

fs.readFile('config.txt', options, function(err, data){
    if(err){
        console.log("Failed to open Config File.");
    }else{
        console.log('config loaded');
        var config = JSON.parse(data);
        console.log("Max Files: %s", config.maxFiles);
        console.log("Max Connections: %d", config.maxConnections);
        console.log("Root Path: " + config.rootPath);
    }
});