var fs = require('fs'),
    path = require('path');

function WalkDirs(dirPath){
    console.log(dirPath);
    fs.readdir(dirPath, function(err, entries){
        for(var idx in entries){
            var fullPath = path.join(dirPath, entries[idx]);
            (function(fullpath){
                fs.stat(fullpath, function(err, stats){
                    if(stats && stats.isFile()){
                        console.log(fullpath);
                    }else if(stats && stats.isDirectory()){
                        WalkDirs(fullpath)
                    }
                })
            })(fullPath);
        }
    });
};


WalkDirs('../');