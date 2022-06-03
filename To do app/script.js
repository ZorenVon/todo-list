// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
// filterOption.addEventListener("click", filterTodo);


// Functions

// add a value on the list
function addTodo(Event){
    // prevent form from submitting
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //  Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

// add to do to local storage
//   saveLocalTodos(todoInput.value);
    
    // check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.append(completedButton);

    // check trash  Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.append(trashButton);

    // append To list
    todoList.appendChild(todoDiv);
        
    // clear todo input Value
     todoInput.value = "";
};


// delete function
function deleteCheck(event) {
    const item = event.target;
    // Delete item on the list
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', 
        function()
        {
            todo.remove();
        });
    }

    // Put a mark on the list
    if(item.classList[0] === 'complete-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo)
    {
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
            break;
            case "completed": 
                if(todo.classList.contains('completed')) 
                {
                    todo.style.display = 'flex';
                }
                else 
                {
                    todo.style.display = "none";
                }
            break;
            case "uncompleted": 
            if(!todo.classList.contains('completed'))
                {
                    todo.style.display = 'flex';
                }
                else 
                {
                    todo.style.display = "none";
                }
            break;
        }
    });
}


// function saveLocalTodos(todo){
//     // Check if you already have a value on the list
//     let todos; 
//     if(localStorage.getItem('todos') === null){
//             todos = [];
//         }
//     else{
//             todos = JSON.parse(localStorage.getItem('Todos'));
//         }

//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }