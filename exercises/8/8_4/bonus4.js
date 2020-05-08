function verifyPass(pass) {
  const reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  return reg.test(pass);
}

const assert = require('assert');
const notpass = [
  'aaa',
  'sdawdwawde',
  null,
  'ASADADADAS',
  '12142422131',
]

const pass = [
  'AABBaabb123',
]

for (let i = 0; i < notpass.length; i++){
  assert.ok(!verifyPass(notpass[i]));
}

for (let i = 0; i < pass.length; i++){
  assert.ok(verifyPass(pass[i]));
}
