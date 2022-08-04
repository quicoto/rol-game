import * as fs from 'fs';

function createFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (!err) {
      const targetContent = fs.readFileSync(fileName, 'utf-8');

      // eslint-disable-next-line no-console
      console.log(`File created: ${fileName}`);

      fs.writeFileSync(fileName, targetContent.replaceAll('%VERSION%', process.env.npm_package_version));
    }
  });
}

function readFile(path) {
  return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
}

function _init() {
  const template = readFile('src/index.html');

  createFile('./dist/index.html', template);
}

_init();
