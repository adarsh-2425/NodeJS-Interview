/*You are tasked with building a simple command-line todo list manager using Promises. The application should allow users to add and list tasks asynchronously. 
The user can add a task and then retrieve the list of all tasks that have been added.*/

const readline = require('readline');
const todoListManager = require('./todoListManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    })
  })
}

async function main() {
  try {

    console.log('Select your option');
    console.log('1. Add Task');
    console.log('2. List Task');
    console.log('3. Exit');

    const choice = await ask('Enter your choice: ');

    switch(choice) {
      case '1': 
        const task = await ask('Enter task: ');
        await todoListManager.addTask(task);
        console.log('Task added successfully');
        break;

      case '2':
        const tasks = await todoListManager.listTasks();
        console.log('Tasks: ', tasks);
        break;
          
      case '3':
        console.log('Goodbye!');
        return;

      default: 
        console.log('Invalid Choice');
        break;
    }
    
  } catch(err) {
    console.error(err.message);
  } finally {
    rl.close();
  }
}

main()
