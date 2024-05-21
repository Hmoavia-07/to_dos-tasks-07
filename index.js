#! /usr/bin/env node
// import inquirer from "inquirer";
// let todos = [];
// let shouldContinue = true;
// while (shouldContinue) {
//   let todosQuestions = await inquirer.prompt([
//     {
//       name: "todo",
//       type: "input",
//       message: "What would you want to add in your todos?",
//     },
//     {
//       name: "addMore",
//       type: "confirm",
//       message: "Do you want to add more in your todos?",
//       default: true,
//     },
//   ]);
//   const{todo, addMore}= todosQuestions;
//   if (todo === "") {
//     console.log("Sorry! You didn't add anything...");
//   } else {
//     todos.push(todo);
//     if (addMore==false){
//       console.log("Todolist:")
//     }
//     for (let i=0;i<todos.length;i++)
//     {console.log(todos[i])};
//   }
//   shouldContinue = todosQuestions.addMore;
// }
// console.log('\nThank you for using the Todo app!\nMade by "Hmoavia.07"');
// generated from CodeGPT
import inquirer from "inquirer";
const addTodo = async () => {
    const { todo, addMore } = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What would you want to add in your todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more in your todos?",
            default: true,
        },
    ]);
    if (todo.trim() === "") {
        console.log("Sorry! You didn't add anything...");
    }
    else {
        todos.push(todo);
        console.log("Todolist:");
        todos.forEach((item) => console.log(item));
    }
    return addMore;
};
const todos = [];
let shouldContinue = true;
while (shouldContinue) {
    shouldContinue = await addTodo();
}
console.log('\nThank you for using the Todo app!\nMade by "Hmoavia.07"');
