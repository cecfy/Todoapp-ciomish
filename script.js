function addtask() {
      const taskInput = document.getElementById('taskInput');

      const taskDate = document.getElementById('taskDate');

      const taskText = taskInput.value.trim();

      const dueDate = taskDate.value;

      if (taskText === '' || dueDate === '') return;

      const taskList = document.getElementById('taskList');

      const li = document.createElement('li');

      li.innerHTML = `<span onclick="toggleTask(this)"> ${taskText} (Due: ${dueDate})</span> <button onclick="removeTask(this)">X</button>`;

      taskList.appendChild(li);
      taskInput.value = '';
      taskDate.value = '';

}

function toggleTask(task) {
      task.classList.toggle('completed');
}

function removeTask(button){
      button.parentElement.remove();
}