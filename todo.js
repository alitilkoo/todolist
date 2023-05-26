const taskInput = document.getElementById("input-box");
const taskList = document.getElementById("list-container");

function addTask() {
  if (taskInput.value === '') {
    alert("You have to write something!");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = taskInput.value;
    taskList.appendChild(listItem);

    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "\u00d7";
    listItem.appendChild(deleteButton);
  }
  
  taskInput.value = "";
  saveData();
}

taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}

showTask();
