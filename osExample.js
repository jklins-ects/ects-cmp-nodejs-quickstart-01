//os is a built in module with functions that use the operating system
//copied from here: https://ects-cmp.com/course_content/nodejs-quick-start-part-1/

const os = require("os");

console.log("Operating System Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total System Memory (bytes):", os.totalmem());
console.log("Free Memory (bytes):", os.freemem());
console.log("CPU Details:", os.cpus());
console.log("Home Directory:", os.homedir());
console.log("System Uptime (seconds):", os.uptime());
