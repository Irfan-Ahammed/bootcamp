const fs = require("fs");

const loadDodo = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json");
    return JSON.parse(dataBuffer.toString());
  } catch (error) {
    return [];
  }
};

const saveTodo = (todo) => {
  fs.writeFileSync("data.json", JSON.stringify(todo, null, 2));
};

const addTodo = (text) => {
  const todos = loadTodos();
  todos.push({ text, done: false });
  saveTodos(todos);
  console.log(chalk.green('✅ Todo added!'));
};                        
 
const listTodos=()=>{
    console.log(loadDodo());
    
}
listTodos()