const { readTasks } = require('../storage');
const { formatTask } = require('../helpers');
const chalk = require('chalk');

function listTasks(options) {
    let tasks = readTasks();

    if (tasks.length === 0) {
        console.log(chalk.dim('No hay tareas registradas.'));
        return;
    }

    if (options.prioridad) {
        tasks = tasks.filter(t => t.prioridad === options.prioridad);
    }

    if (options.pendientes) {
        tasks = tasks.filter(t => !t.done);
    }

    if (options.completadas) {
        tasks = tasks.filter(t => t.done);
    }

    if (tasks.length === 0) {
        console.log(chalk.dim('No hay tareas que coincidan con el filtro.'));
        return;
    }

    console.log(chalk.bold('\n📋 Tus tareas:\n'));
    tasks.forEach(task => {
        console.log(' ' + formatTask(task));
    });
    console.log('');
}

module.exports = { listTasks };