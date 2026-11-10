const tasks = [];
export function getTask(id) {
  return tasks.find((t) => t.id === id);
}

export function createTask(id, title) {
  const newTask = {
    id,
    title,
    status: "pending",
  };
  tasks.push(newTask);
  return newTask;
}

export function updateTask(id) {
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) return;
  const task = tasks[taskIndex];
  let nextStatus;
  if (task.status === "pending") nextStatus = "in_progress";
  if (task.status === "in_progress") nextStatus = "finished";
  if (task.status === "finished") return "The task has finished";
  const updatedTask = {
    id: task.id,
    title: task.title,
    status: nextStatus,
  };
  tasks[taskIndex] = updatedTask;
  return updatedTask;
}

export function listTask() {
  tasks.forEach((task) => {
    console.log(
      `Task #${task.id}: Title - ${task.title}, Status - ${task.status}`,
    );
  });
}
