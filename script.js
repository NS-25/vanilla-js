// console.log("I am javascript and I am working");

let todos = [];


// Grab elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listElement = document.getElementById("todo-list");


// Add task function
const addTodo = () => {

  const text = input.value.trim();
  if (!text) {
    return alert("Please enter a task")
  }

  // ArrayLisk.add()

  todos.push({ text, done: false });
  input.value = "";
  renderTodos();
}
//// Toggle "done" status

const toggleTodo = (index) => {
  todos[index].done = !todos[index];
  renderTodos();
}
///// 



addBtn.addEventListener('click', addTodo);