const { readTasks, writeTasks } = require('../storage');
const chalk = require('chalk');

function doneTask(id) {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        console.log(chalk.red(`✘ No se encontró ninguna tarea con ID #${id}`));
        return;
    }

    if (tasks[index].done) {
        console.log(chalk.yellow(`⚠ La tarea #${id} ya estaba marcada como completada.`));
        return;
    }

    tasks[index].done = true;
    tasks[index].completadaEn = new Date().toISOString();
    writeTasks(tasks);

    console.log(chalk.green(`✔ Tarea #${id} "${tasks[index].titulo}" marcada como completada.`));
}

module.exports = { doneTask };