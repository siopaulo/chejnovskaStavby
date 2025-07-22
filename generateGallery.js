const fs = require('fs');
const path = require('path');

const categories = {
  fasady: 'fasady',
  koupelny: 'koupelny',
  materialy: 'materialy',
  interier: 'interier',
  izolacni: 'izolacniOmitka',
};

const exts = ['.jpg', '.jpeg', '.png'];
const data = {};
for (const [key, dirName] of Object.entries(categories)) {
  const dirPath = path.join(__dirname, 'img', dirName);
  let files = [];
  try {
    files = fs.readdirSync(dirPath)
      .filter(file => exts.includes(path.extname(file).toLowerCase()))
      .map(file => path.join('img', dirName, file));
  } catch (err) {
    console.error(`Failed reading ${dirPath}:`, err);
  }
  data[key] = files.sort();
}

fs.writeFileSync('gallery-data.json', JSON.stringify(data, null, 2));
console.log('Gallery data written to gallery-data.json');
