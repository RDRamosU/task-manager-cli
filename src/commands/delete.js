const { readTasks, writeTasks } = require('../storage');
const chalk = require('chalk');

function deleteTask(id) {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        console.log(chalk.red(`✘ No se encontró ninguna tarea con ID #${id}`));
        return;
    }

    const removed = tasks.splice(index, 1)[0];
    writeTasks(tasks);

    console.log(chalk.green(`✔ Tarea #${id} "${removed.titulo}" eliminada correctamente.`));
}

module.exports = { deleteTask };