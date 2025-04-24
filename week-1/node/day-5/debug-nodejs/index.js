#!/usr/bin/env node
const { addTodo, listTodos, deleteTodo, markDone } = require('./todo');
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showMenu = () => {
  console.log(chalk.cyan('\nTodo CLI App'));
  console.log(chalk.cyan('-------------'));
  console.log('1. Add Todo');
  console.log('2. List Todos');
  console.log('3. Delete Todo');
  console.log('4. Mark as Done');
  console.log('5. Exit\n');
};

const askUser = () => {
  showMenu();
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        rl.question('Enter todo: ', (text) => {
          addTodo(text);
          askUser();
        });
        break;
      case '2':
        listTodos();
        askUser();
        break;
      case '3':
        rl.question('Enter todo number to delete: ', (num) => {
          deleteTodo(parseInt(num));
          askUser();
        });
        break;
      case '4':
        rl.question('Enter todo number to mark as done: ', (num) => {
          markDone(parseInt(num));
          askUser();
        });
        break;
      case '5':
        console.log(chalk.green('Goodbye! 👋'));
        rl.close();
        break;
      default:
        console.log(chalk.red('Invalid option!'));
        askUser();
    }
  });
};

askUser();
