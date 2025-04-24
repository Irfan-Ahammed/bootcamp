const readline = require("readline");

const rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin
});

const showMenu = () => {
  console.log("--irfan toDo app--");
  console.log("----------------");
  console.log("1. Add Todo");
  console.log("2. List Todos");
  console.log("3. Delete Todo");
  console.log("4. Mark as Done");
  console.log("5. Exit\n");
};

const askUser = () => {
  showMenu();
  rl.question("choose an option",(option)=>{
    switch(option){
        case "1":
            rl.question("enter todo",(text)=>{
                
            })
    }
    
  })
};
askUser();
