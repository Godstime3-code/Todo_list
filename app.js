document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoButton = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            addTodoToList(todo);
        });
    }

    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function addTodoToList(todo) {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
    }

    addTodoButton.addEventListener('click', () => {
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push(newTodo);
            saveTodos(todos);
            addTodoToList(newTodo);
            todoInput.value = '';
        }
    });

    loadTodos();
});
