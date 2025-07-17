const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const datetimeDisplay = document.getElementById('datetime-display');

function updateDateTime() {
    const now = new Date();

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    datetimeDisplay.textContent = `Today is: ${formattedDate} at ${formattedTime}`;
}

updateDateTime();

addButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement('li');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        listItem.appendChild(taskTextSpan);

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener('click', function() {
            const newText = prompt("Edit your task:", taskTextSpan.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskTextSpan.textContent = newText.trim();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);

        todoInput.value = "";
    }
});

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});