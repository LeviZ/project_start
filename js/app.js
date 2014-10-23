// Problem User Interaction Doesn't Provide Desired Results.
// Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //complete-tasks

// New task list item
var createNewTaskElement = function(taskString) {
  // Create list item
  var listItem = document.createElement("li");
  // input (checkbox)
  var checkBox = document.createElement("input"); //type is checkbox
  // label
  var label = document.createElement("label");
  // input (text)
  var editInput = document.createElement("input"); //text
  // button.edit
  var editButton = document.createElement("button");
  // button.delete
  var deleteButton = document.createElement("button");
  // Each elements need to be modified

  checkBox.type = "checkbox";
  editInput.type = "input";

  editButton.innerText = "Edit";
  editButton.className = "edit"
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;

}

// Add a new task
var addTask = function() {
  console.log("Add task...")
  // Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);

  // Append lit item to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";

}

// Edit an existing task
var editTask = function() {
  console.log("Edit Task...")

var listItem = this.parentNode;

var editInput = listItem.querySelector("input[type=text]");
var label = listItem.querySelector("label");

var containsClass = listItem.classList.contains("editMode")

  // If the class of the parent is .editmode
  if (constainsClass); {

    // Switch from .editmode
    // Label text become the input's value
  label.innerText = editInput.value;
  } else {
    // Switch to .editmode
    // input value becomes the label's text
    editInput.value = label.innerText;
  }
  // Toggle .editMode on the parent
  listItem.classList.toggle("editMode");
}


// Delete an existing task
var deleteTask = function() {
  console.log("Task deleted..")

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  // Remove the parent list item from the ul
  ul.removeChild(listItem);

}


// Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete")
  // Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}


// Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  // Append the task list item to the #incompleted-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  // select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  // bind editTask to edit button
  editButton.onclick = editTask;

  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  // bind checkBozEventHandler to checkBox
  checkBox.onchange = checkBoxEventHandler;
}


// Set the click handler to the addTask function
addButton.onclick = addTask;
addButton.addEventListenner("click", addTask)

// cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  // bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  // bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}



