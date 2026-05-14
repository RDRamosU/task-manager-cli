const chalk = require('chalk');

function generateId(tasks) {
    if (tasks.length === 0) return 1;
    const maxId = Math.max(...tasks.map(t => t.id));
    return maxId + 1;
}

function formatTask(task) {
    const status = task.done
        ? chalk.green('✔ completada')
        : chalk.yellow('○ pendiente');

    const prioridad = {
        alta: chalk.red('alta'),
        media: chalk.yellow('media'),
        baja: chalk.blue('baja')
    }[task.prioridad] || chalk.white(task.prioridad);

    return `${chalk.dim(`#${task.id}`)} ${chalk.bold(task.titulo)} — ${status} | prioridad: ${prioridad} | categoría: ${chalk.cyan(task.categoria)}`;
}

module.exports = { generateId, formatTask };