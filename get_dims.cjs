const fs = require('fs');
const path = require('path');
const dir = 'public/people';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.png')) {
    const buffer = fs.readFileSync(path.join(dir, file));
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    console.log(file, width, height);
  }
});
