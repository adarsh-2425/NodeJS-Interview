// Tasks Array
const tasks = [];

// Add Task
function addTask(task) {
  return new Promise((resolve, reject) => {
    try {
      tasks.push(task);
      resolve('Task added successfully');
    } catch (err) {
      reject(new Error('Error adding tasks: ' + err.message));
    }
  })
}

// View Tasks
function listTasks() {
  return new Promise((resolve, reject) => {
    try {
      resolve([...tasks]);
    } catch (err) {
      reject(new Error('Error listing tasks: ' + err.message));
    }
  })
}

module.exports = {
  addTask,
  listTasks
}
