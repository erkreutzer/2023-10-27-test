const fs = require('fs');

function testFile(file) {
  console.log('testFile', file)
  if (!fs.existsSync(file)) {
    console.log('missing file');
    return;
  }

  const resp = fs.readFileSync(file, 'utf8');

  console.log('contents:', resp);

  try {
    const obj = JSON.parse(resp);
    console.log('username', obj.username);
    console.log('password', obj.password);
  } catch (e) {
    console.log('not able to parse')
  }
}

testFile('tools/playwright/accounts/account.json');
testFile('tools/playwright/accounts/account2.json');
