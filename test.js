const fs = require('fs');
const resp = fs.readFileSync('./account.json', 'utf8');
// console.log(resp);
// get string respresentation of file at account.json

try {
  const obj = JSON.parse(resp);
  console.log('username', obj.username);
  console.log('password', obj.password);
} catch (e) {
  console.log('not able to parse')
}
