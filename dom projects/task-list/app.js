alert('working')
const taskForm = document.querySelector("task-form");
const taskInput = document.querySelector("task");
const collection = document.querySelector(".collection");
const clearTask = document.querySelector(".clear-tasks");
const filterInput = document.querySelector("#filter");


taskForm.addEventListener("submit",taskFormFunction);
clearTask.addEventListener("click", clearTaskHandler);