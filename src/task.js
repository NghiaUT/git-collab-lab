task = [];
export function getTask(id) {
  return {
    id,
    title: "Learn Git",
    status: "pending",
  };
}

export function createTask(title) {
  return {
    id: Date.now(),
    title,
    status: "pending",
  };
}

export function updateTask(id, title) {
  return {
    id,
    title,
  };
}
