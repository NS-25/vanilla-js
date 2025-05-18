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
///// Remove task
const removeTodo = (index) => {
  // ArrayList.remove()
  todos.splice(index, 1);
  renderTodos();
}

//// Render list to the DOM

const renderTodos = () => {
  listElement.innerHTML = '';
  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="text-decoration:${todo.done ? 'line-through' : 'none'}">
        ${todo.text}
      </span>
      <button onclick="toggleTodo(${i})">
        ${todo.done ? 'Undo' : 'Done'}
      </button>
      <button onclick="removeTodo(${i})">🗑️</button>
    `;
    listElement.appendChild(li);
  });
}

// Wire up button
addBtn.addEventListener('click', addTodo);

// Initial render (empty);
renderTodos();