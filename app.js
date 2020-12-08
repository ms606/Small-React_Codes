const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  const inputBuffer = await promisify(fs.readFile)('./images1/*.heic');

 const images = await convert.all({
    buffer: inputBuffer, // the HEIC file buffer
    format: 'JPEG'       // output format
  });


  for (let idx in images) {
    const image = images[idx];
    const outputBuffer = await image.convert();
    await promisify(fs.writeFile)(`./result-${idx}.jpg`, outputBuffer);
   
  }
})();








