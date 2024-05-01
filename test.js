const fs = require('fs');
const file = 'account.json';
if (!fs.existsSync(file)) {
  console.log('missing file');
  return;
}

const resp = fs.readFileSync(file, 'utf8');

console.log('contents:', resp);
// get string respresentation of file at account.json

try {
  const obj = JSON.parse(resp);
  console.log('username', obj.username);
  console.log('password', obj.password);
} catch (e) {
  console.log('not able to parse')
}
