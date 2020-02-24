
// declared vars
let tasks = document.getElementById('tasks');
const taskForm = document.getElementById("create-task-form");
let deleteButton = document.getElementsByClassName('delete-btn')

// created elements
let createNewNode = document.createElement("li");
let button = document.createElement("BUTTON");


// defined functions
const toggleColor = () => {
  if (event.target.style.color === '') {
    event.target.style.color = 'pink'
  } else if (event.target.style.color === 'pink') {
    event.target.style.color = 'black'
  } else event.target.style.color = 'blue'
}

const clickAction = (event) => {
    if (event.target.className === "delete-btn") {
    event.target.parentNode.remove();
  } else if (event.target.tagName === "LI") {
    toggleColor()
  }
};

const submitAction = (event) => {
  // prevent redirection of page
  event.preventDefault();
  // set vars from input
  let userInput = event.target.children[1].value;
  createNewNode.innerText = userInput;
  tasks.appendChild(createNewNode);
  button.className = 'delete-btn'
  createNewNode.appendChild(button);
  button.innerHTML = 'X';
  // clear the form input field
  taskForm.reset();
};

// event listeners
taskForm.addEventListener('submit', submitAction)
tasks.addEventListener('click', clickAction)

// called functions


// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
