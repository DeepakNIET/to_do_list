// Select elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener for the Add Task button
addTaskBtn.addEventListener('click', function() {
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        // Create a new task item
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add task to the list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';

        // Add delete functionality to each task
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    } else {
        alert('Please enter a task');
    }
});
