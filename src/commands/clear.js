const { readTasks, writeTasks } = require('../storage');
const chalk = require('chalk');

function clearTasks() {
    const tasks = readTasks();
    const pendientes = tasks.filter(t => !t.done);
    const eliminadas = tasks.length - pendientes.length;

    if (eliminadas === 0) {
        console.log(chalk.yellow('⚠ No hay tareas completadas para eliminar.'));
        return;
    }

    writeTasks(pendientes);

    console.log(chalk.green(`✔ ${eliminadas} tarea(s) completada(s) eliminada(s).`));
}

module.exports = { clearTasks };