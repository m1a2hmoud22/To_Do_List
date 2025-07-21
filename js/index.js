document.addEventListener('DOMContentLoaded', function () {

    const taskForm = document.getElementById('form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText); // Call a function to add the task
            taskInput.value = ''; // Clear the input field
            taskInput.focus(); // Put the cursor back in the input field
        }
    });

    function addTask(text) {
        // 1. Create the list item (li)
        const li = document.createElement('li');

        // 2. Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = text;
        
        // 3. Create a container for the buttons
        const buttonsDiv = document.createElement('div');

        // 4. Create the "Complete" button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'complete'; // "Done" in Arabic
        completeBtn.className = 'complete-btn';

        // Add event listener to the "Complete" button
        completeBtn.addEventListener('click', function () {
            // Toggle the 'completed' class on the whole list item (li)
            li.classList.toggle('completed');
        });

        // 5. Create the "Delete" button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = ' delete '; // "Delete" in Arabic
        deleteBtn.className = 'delete-btn';

        // Add event listener to the "Delete" button
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li); // Remove the li element when clicked
        });

        // 6. Append buttons to their container
        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);

        // 7. Append the span and the buttons container to the list item
        li.appendChild(taskSpan);
        li.appendChild(buttonsDiv);

        // 8. Append the list item to the task list (ol)
        taskList.appendChild(li);
    }
});