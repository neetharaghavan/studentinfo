document.addEventListener("DOMContentLoaded", function() {
    loadTodos();
});

function loadTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="checkbox" id="todo${index}" ${todo.completed ? "checked" : ""}>
            <label for="todo${index}">${todo.task}</label>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const task = todoInput.value.trim();

    if (task !== "") {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push({ task, completed: false });
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = "";
        loadTodos();
    } else {
        alert("Please enter a task.");
    }
}

function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();}