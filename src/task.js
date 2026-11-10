const tasks = [];
export function getTask(id) {
  return tasks.find((t) => t.id === id);
}

export function createTask(title) {
  const newTask = {
    id: Date.now(),
    title,
    status: "pending",
  };
  tasks.push(newTask);
  return newTask;
}

export function updateTask(id, title) {
  const taskIndex = tasks.findIndex((t) => t.id === id && t.title === title);
  if (!task) return;
  const task = tasks[taskIndex];
  const updatedTask = {
    id: task.id,
    title: task.title,
    status: "in_progress",
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
