var fs = require('fs'),
    config = {
        maxFiles: 20,
        maxConnections: 15,
        rootPath: "/myfolder"
    },
    configTxt = JSON.stringify(config),
    options = {encoding: 'utf8', flag: 'w'};

fs.writeFile('config.txt', configTxt, options, function(err){
    if(err){
        console.log("Config Write Failed.")
    }else{
        console.log("Config Saved.");
    }
});