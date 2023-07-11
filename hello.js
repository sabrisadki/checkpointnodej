const fs = require('fs');

// Define the file path and content
const filePath = 'hello.txt';
const fileContent = 'hello hello';

// Write the file
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created successfully!');
});

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
