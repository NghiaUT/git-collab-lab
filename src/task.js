export function getTask(id) {
  return {
    id,
    title: "Learn Git",
    status: "pending",
  };
}

export function updateTask(id, title) {
  return {
    id,
    title,
    status: "in_progress",
  };
}
