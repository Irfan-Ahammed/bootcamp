const fs = require('fs');
const chalk = require('chalk');

const loadTodos = () => {
  try {
    const dataBuffer = fs.readFileSync('data.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveTodos = (todos) => {
  fs.writeFileSync('data.json', JSON.stringify(todos, null, 2));
};

const addTodo = (text) => {
  const todos = loadTodos();
  todos.push({ text, done: false });
  saveTodos(todos);
  console.log(chalk.green('✅ Todo added!'));
};                        
 

const listTodos = () => {
  const todos = loadTodos();
  console.log(chalk.blue.bold('\nYour Todos:\n'));
  todos.forEach((todo, index) => {
    const status = todo.done ? chalk.green('[✓]') : chalk.red('[ ]');
    console.log(`${index + 1}. ${status} ${todo.text}`);
  });
};

const deleteTodo = (index) => {
  const todos = loadTodos();
  if (index < 1 || index > todos.length) {
    console.log(chalk.red('Invalid index!'));
    return;
  }
  const deleted = todos.splice(index - 1, 1);
  saveTodos(todos);
  console.log(chalk.yellow(`🗑️ Deleted: ${deleted[0].text}`));
};

const markDone = (index) => {
  const todos = loadTodos();
  if (index < 1 || index > todos.length) {
    console.log(chalk.red('Invalid index!'));
    return;
  }
  todos[index - 1].done = true;
  saveTodos(todos);
  console.log(chalk.green('✅ Marked as done!'));
};

module.exports = { addTodo, listTodos, deleteTodo, markDone };
