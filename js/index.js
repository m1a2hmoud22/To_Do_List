document.addEventListener('DOMContentLoaded', function () {

    const taskForm = document.getElementById('form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('tasks');
    const originalPlaceholder = taskInput.placeholder;

    // Step 1: Load tasks from localStorage when the page loads
    loadTasks();

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText, false); // Add new task, default to not completed
            taskInput.value = '';
            taskInput.focus();
            saveTasks(); // Save after adding a new task
        } else {
            taskInput.placeholder = 'Please enter a task';
        }
    });

    taskInput.addEventListener('focus', function() {
        taskInput.placeholder = originalPlaceholder;
    });

    /**
     * Adds a task to the list on the screen.
     * @param {string} text - The text of the task.
     * @param {boolean} isCompleted - The completion status of the task.
     */
    function addTask(text, isCompleted) {
        const li = document.createElement('li');
        if (isCompleted) {
            li.classList.add('completed'); // If task was saved as completed, apply the style
        }

        const taskSpan = document.createElement('span');
        taskSpan.textContent = text;
        
        const buttonsDiv = document.createElement('div');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.addEventListener('click', function () {
            li.classList.toggle('completed');
            saveTasks(); // Save after toggling completion
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
            saveTasks(); // Save after deleting a task
        });

        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(buttonsDiv);

        taskList.appendChild(li);
    }

    /**
     * Saves all current tasks to localStorage.
     */
    function saveTasks() {
        const tasks = [];
        // Loop through all the <li> elements on the page
        document.querySelectorAll('#tasks li').forEach(function(li) {
            // Create an object for each task
            const task = {
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            };
            tasks.push(task);
        });
        // Convert the array of objects to a string and save it
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    /**
     * Loads tasks from localStorage and displays them.
     */
    function loadTasks() {
        // Get the saved tasks string, or an empty array if nothing is saved
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Loop through the saved tasks and add them to the page
        savedTasks.forEach(function(task) {
            addTask(task.text, task.completed);
        });
    }
});