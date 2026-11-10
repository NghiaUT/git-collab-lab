import { updateTask, createTask, getTask, listTask } from "./task.js";

console.log(createTask(1, "Làm đồ án trường"));

console.log(createTask(2, "Làm dự án công ty"));

console.log(createTask(3, "2 tiếng học tiếng anh"));

console.log(getTask(2)); // "Làm dự án công ty"
console.log(updateTask(2));
console.log(updateTask(2));
console.log(updateTask(2));
console.log(getTask(2));

listTask();
