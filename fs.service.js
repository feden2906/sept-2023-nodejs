const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(process.cwd(), 'db.json');

const reader = async () => {
    const users = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(users);
}

const writer = async (users) => {
   await fs.writeFile(filePath, JSON.stringify(users))
}

module.exports = {reader, writer};
