// const readlineSync = require('readline-sync');

// const tasks = {};

// let taskId = 1;

// function listTasks() {
//   if (Object.keys(tasks).length === 0) {
//     console.log('La lista de tareas está vacía. por favor agregar una tarea');
//     addTask();
//   } else {
//     console.log('Lista de tareas:');
//     for (const taskId in tasks) {
//       const task = tasks[taskId];
//       const status = task.estado ? 'Completada' : 'No completada';
//       console.log(`${task.id}. [${status}] ${task.descripcion}`);
//     }
//   }
// }

// function addTask() {
//   const descripcion = readlineSync.question('Escribe la descripción de la tarea: ');
//   const task = {
//     id: taskId++,
//     descripcion,
//     estado: false,
//   };
//   tasks[task.id] = task;
//   console.log('Tarea agregada correctamente.');
// }

// function removeTask() {
//   listTasks();
//   const taskId = readlineSync.question('Escribe el ID de la tarea que quieres eliminar: ');
//   if (tasks[taskId]) {
//     delete tasks[taskId];
//     console.log('Tarea eliminada correctamente.');
//   } else {
//     console.log('ID de tarea inválido.');
//   }
// }

// function completeTask() {
//   listTasks();
//   const taskId = readlineSync.question('Escribe el ID de la tarea que has completado: ');
//   if (tasks[taskId]) {
//     tasks[taskId].estado = true;
//     console.log('Tarea marcada como completada.');
//   } else {
//     console.log('ID de tarea inválido.');
//   }
// }

// while (true) {
//   console.log('\nAcciones disponibles:');
//   console.log('1. Listar tareas');
//   console.log('2. Agregar tarea');
//   console.log('3. Eliminar tarea');
//   console.log('4. Marcar tarea como completada');
//   console.log('5. Salir');

//   const choice = readlineSync.question('Escribe el numero de la accion que deseas realizar: ');

//   switch (choice) {
//     case '1':
//       listTasks();
//       break;
//     case '2':
//       addTask();
//       break;
//     case '3':
//       removeTask();
//       break;
//     case '4':
//       completeTask();
//       break;
//     case '5':
//       process.exit(0); // Salir del programa
//     default:
//       console.log('Opción inválida. Por favor, elige una acción válida.');
//   }
// }