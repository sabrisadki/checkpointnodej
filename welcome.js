const fs = require('fs');

// Define the file path and content
const filePath = 'welcome.txt';
const fileContent = 'hello node';

// Write the file
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created successfully!');
});
