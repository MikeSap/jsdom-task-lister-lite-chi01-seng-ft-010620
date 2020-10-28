// saving some existing HTML elements into variables to be used elsewhere


// grab the task form
const taskForm = document.getElementById("create-task-form");
// grab the input field from the form
const taskInputField = document.getElementById("new-task-description");
// grab the ul node where we want to add LI tag children
const tasksList = document.getElementById("tasks");
// get the dropdown element
const dropdown = document.getElementById('importance-dropdown');


// this function accepts an importance value as a string (ie "High", "Medium" || "Low")
// then returns a color that represents that importance level
function setStyle(importanceValue){
  // declare color variable so it is available within the scope of the whole function
  let color;
  // choose a color based on the importance value from the form
  if (importanceValue === "High") {
    color = "red";
  } else if (importanceValue === "Medium") {
    color = "orange";
  } else if (importanceValue === "Low") {
    color = "green";
  }
  // return the value of the variable color to be used elsewhere
  return color;
}


// define a function to handle the functionality for adding an element to the list.
function addToList(inputValue, importanceValue){
  // create LI element
  let LI = document.createElement("LI");
  // set the inner HTML of the LI tag to the input value coming in from the form input
  LI.innerHTML = inputValue;
  // save the output of this function into a variable
  const color = setStyle(importanceValue);
  // create a delete button
  let deleteBtn = document.createElement("button");
  // make the text on the delete button "X"
  deleteBtn.innerHTML = "X";
  // give the button the class name of "delete-btn"
  deleteBtn.className = "delete-btn";
  // append the delete button to the LI tag.
  LI.appendChild(deleteBtn);
  // append the LI tag as a child to the ul node
  tasksList.appendChild(LI);
  // update the style of the text with the value based on importance
  LI.style.color = color;
  // clear the user input
  taskForm.reset();
}



// EVENT LISTENERS


// add a submit event listener when the user submits the form
document.addEventListener('submit', function(e){
  // prevent the default submission of the form
  e.preventDefault();
  // find the user input that they typed into the form
  let userInput = taskInputField.value;
  // find the importance level the user chose from the dropdown
  let importanceValue = dropdown.value;
  // invoke the function with an argument of the userInput value and importance value
  addToList(userInput, importanceValue);
})


// add a click event listener on the entire document
document.addEventListener("click", function(e){
  // check if the class name of the clicked element is "delete-btn"
  if (e.target.className === "delete-btn") {
    // grab the event's target's parent element (one level up in the HTML tree)
    let parentNode = e.target.parentElement;
    // remove the element off the page.
    parentNode.remove();
  }
})