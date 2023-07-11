const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 41,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log(password);
