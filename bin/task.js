#!/usr/bin/env node

const { program } = require('commander');
const { addTask } = require('../src/commands/add');
const { listTasks } = require('../src/commands/list');
const { doneTask } = require('../src/commands/done');
const { deleteTask } = require('../src/commands/delete');
const { clearTasks } = require('../src/commands/clear');

program
  .name('task')
  .description('Gestor de tareas desde la terminal')
  .version('1.0.0');

program
  .command('add <titulo>')
  .description('Agregar una nueva tarea')
  .option('-p, --prioridad <prioridad>', 'Prioridad de la tarea (alta, media, baja)', 'media')
  .option('-c, --categoria <categoria>', 'Categoría de la tarea', 'general')
  .action(addTask);

program
  .command('list')
  .description('Listar todas las tareas')
  .option('-p, --prioridad <prioridad>', 'Filtrar por prioridad')
  .option('--pendientes', 'Mostrar solo tareas pendientes')
  .option('--completadas', 'Mostrar solo tareas completadas')
  .action(listTasks);

program
  .command('done <id>')
  .description('Marcar una tarea como completada')
  .action(doneTask);

program
  .command('delete <id>')
  .description('Eliminar una tarea por ID')
  .action(deleteTask);

program
  .command('clear')
  .description('Eliminar todas las tareas completadas')
  .action(clearTasks);

program.parse(process.argv);