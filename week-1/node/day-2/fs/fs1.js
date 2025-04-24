var fs = require("fs");
fs.writeFile("fs2.js","console.log('fs--2  done')",((err)=>{
    console.log("data saved");
    
}))