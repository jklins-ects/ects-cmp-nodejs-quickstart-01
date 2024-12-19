// 3 basic types of modules
// built in modules that come with a node install (eg. fs, os, path, ...)
// custom modules, such as module2.js and module3.js...when you require those,
//    you get access to whatever was exported from those files.
// third party modules which can be included after you install them with npm
//    npm is node's package manage (eg. npm install express --you run that on the command line)
// https://ects-cmp.com/course_content/nodejs-quick-start-part-1/

//explore built in modules:

//fs (file system)
//importing in node:
const fs = require("fs"); //this imports the fs modules so you can use it in your program

// fs.readFileSync(filename) //blocking code, nothing executes until it's done
//async - require a callback - a callback is a function that is run when process completes
fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file: ", err);
        return;
    }
    console.log("File content: ", data);
});

let data = "This is content to write to a file";
fs.writeFile("writtenfile.txt", data, (err) => {
    if (err) {
        console.error("Error writing file: ", err);
        return;
    }
    console.log("File written successfully");
});

let moredata = "\nData added through append";
fs.appendFile("writtenfile.txt", moredata, (err) => {
    if (err) {
        console.error("Error appending to file: ", err);
        return;
    }
    console.log("File appended successfully");
});

let file = "fakefile.txt";
if (fs.existsSync(file)) {
    console.log("file exists");
} else {
    console.log("file not found");
}

fs.unlink("writtenfile.txt", (err) => {
    if (err) {
        console.error("Error deleting file", err);
        return;
    }
    console.log("File deleted");
});
