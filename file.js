var fs = require("fs");

console.log("Going to open file!");
fs.open('hello.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});
// Asynchronous read
fs.readFile('hello.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('hello.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
console.log( __filename );
console.log( __dirname );

function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setInterval(printHello, 2000);
