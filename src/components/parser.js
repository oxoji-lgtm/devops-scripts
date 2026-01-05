const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileContent = null;
  }

  async readFile() {
    try {
      this.fileContent = await fs.promises.readFile(this.filePath, 'utf8');
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  parseFile() {
    if (!this.fileContent) {
      throw new Error('File content is not loaded');
    }

    const lines = this.fileContent.split('\n');
    const parsedData = lines.map((line) => {
      const [key, value] = line.split('=');
      return { key: key.trim(), value: value.trim() };
    });

    return parsedData;
  }
}

async function main() {
  const filePath = path.join(__dirname, 'example.txt');
  const parser = new Parser(filePath);
  await parser.readFile();
  const parsedData = parser.parseFile();
  console.log(parsedData);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});