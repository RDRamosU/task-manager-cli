const { readTasks, writeTasks } = require('../storage');
const { generateId } = require('../helpers');
const chalk = require('chalk');

function addTask(titulo, options) {
  const tasks = readTasks();

  const newTask = {
    id: generateId(tasks),
    titulo,
    prioridad: options.prioridad || 'media',
    categoria: options.categoria || 'general',
    done: false,
    creadaEn: new Date().toISOString()
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log(chalk.green(`✔ Tarea agregada: "${newTask.titulo}" [#${newTask.id}]`));
}

module.exports = { addTask };