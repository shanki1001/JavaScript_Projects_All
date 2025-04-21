const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
window.onload = () => {
  tasks.forEach(renderTask);
};

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(task);
    taskInput.value = "";
  }
});

function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
    tasks = tasks.filter((t) => t != task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  li.append(deleteBtn);
  taskList.appendChild(li);
}
