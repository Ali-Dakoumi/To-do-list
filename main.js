const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todobtn");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");

todoList.addEventListener("click", deletecheck);
todoButton.addEventListener("click", addTodo);
filterOption.addEventListener("click", filterTodo);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);
  // check button
  const completedbtn = document.createElement("button");
  completedbtn.innerHTML = '<i class="fas fa-check"></i> ';
  completedbtn.classList.add("completebtn");
  todoDiv.appendChild(completedbtn);
  // trash button
  const trashbtn = document.createElement("button");
  trashbtn.innerHTML = '<i class="fas fa-trash"></i> ';
  trashbtn.classList.add("trashbtn");
  todoDiv.appendChild(trashbtn);
  // append to list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deletecheck(e) {
  const item = e.target;
  if (item.classList[0] === "trashbtn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "completebtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
