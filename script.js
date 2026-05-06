const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleString();
}
setInterval(updateTime, 1000);

// Load dari localStorage
window.onload = loadTasks;

function addTask() {
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("priority").value;

  if (input.value === "") return alert("Isi dulu!");

  createTask(input.value, priority, false);
  saveTask(input.value, priority, false);

  input.value = "";
}

function createTask(text, priority, isDone) {
  const li = document.createElement("li");

  li.classList.add(priority.toLowerCase());
  if (isDone) li.classList.add("done");

  const span = document.createElement("span");
  span.innerText = text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isDone;

  checkbox.onclick = () => {
    li.classList.toggle("done");
    moveTask(li);
    updateStorage();
  };

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.classList.add("delete-btn");
  delBtn.onclick = () => {
    li.remove();
    updateStorage();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  if (isDone) {
    doneList.appendChild(li);
  } else {
    todoList.appendChild(li);
  }
}

function moveTask(task) {
  if (task.classList.contains("done")) {
    doneList.appendChild(task);
  } else {
    todoList.appendChild(task);
  }
}

// STORAGE
function saveTask(text, priority, isDone) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, priority, isDone });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateStorage() {
  let tasks = [];

  document.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.children[1].innerText,
      priority: li.classList[0],
      isDone: li.classList.contains("done")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    createTask(task.text, capitalize(task.priority), task.isDone);
  });
}

function deleteAll() {
  localStorage.removeItem("tasks");
  todoList.innerHTML = "";
  doneList.innerHTML = "";
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}