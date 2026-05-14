const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../data/tasks.json');

function readTasks() {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
}

function writeTasks(tasks) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
}

module.exports = { readTasks, writeTasks };