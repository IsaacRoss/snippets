var fs = require('fs'),
    veggieTray = ['carrots', 'celery', 'olives'],
    fd = fs.openSync('veggie.txt', 'w');
while(veggieTray.length){
    var veggie = veggieTray.pop() + " ",
        bytes = fs.writeSync(fd, veggie, null, null);
    console.log("Wrote %s %dbytes", veggie, bytes);
}
