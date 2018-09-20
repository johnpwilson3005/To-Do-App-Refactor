let messageForm = document.forms.toDoForm;
let doneForm = document.forms.doneForm;
messageForm.addEventListener("submit", e => {
  e.preventDefault();
  // Variables
  let list = document.getElementById("toDoUl");
  let donelist = document.getElementById("done-ul");
  let newMessage = document.createElement("li");
  let message = e.target["toDoMessage"].value;
  let doneButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  let editButton = document.createElement("button");
  // Setting class names, id, and textContent
  newMessage.className = "created-li";
  newMessage.id = "created-list-id";
  newMessage.textContent = message;
  doneButton.className = "done-button btn-success pull-right";
  doneButton.textContent = "Complete";
  deleteButton.className = "delete-button btn-danger pull-right";
  deleteButton.textContent = "Nope";
  editButton.className = "edit-button btn-info pull-right";
  editButton.textContent = "Edit";
  // Appended items
  list.appendChild(newMessage);
  newMessage.appendChild(editButton);
  newMessage.appendChild(deleteButton);
  newMessage.appendChild(doneButton);
  messageForm.reset();
  //Done button
  doneButton.addEventListener("click", e => {
    e.preventDefault();
    // Variables
    let doneList = document.getElementById("done-ul");
    // Setting class names, id, and textContent
    newMessage.className = "created-li";
    newMessage.id = "created-list-id";
    newMessage.textContent = message;
    deleteButton.className = "delete-button btn-danger pull-right";
    deleteButton.textContent = "Nope";
    // Appended items
    doneList.appendChild(newMessage);
    newMessage.appendChild(deleteButton);
    //Remove items from To Do Side
    list.removeChild(newMessage);
  });
  // delete button
  deleteButton.addEventListener("click", e=> {
      //Variables
      let list = document.getElementById("toDoUl");
      let doneList = document.getElementById("done-ul");
      //Deleter
      newMessage.parentElement.removeChild(newMessage);
  });
  //Edit Event
  editButton.addEventListener("click", e=> {
    //Variables
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    let editText = prompt("Enter your new text:");
    // Defining buttons for scope
    doneButton.className = "done-button btn-success pull-right";
    doneButton.textContent = "Complete";
    deleteButton.className = "delete-button btn-danger pull-right";
    deleteButton.textContent = "Nope";
    editButton.className = "edit-button btn-info pull-right";
    editButton.textContent = "Edit";
    //Replace text function
    if(editText !== ""){
      newMessage.innerText = editText;
      newMessage.appendChild(deleteButton);
      newMessage.appendChild(doneButton);
    };
    //Delete button
    deleteButton.addEventListener("click", e=> {
        //Variables
        let list = document.getElementById("toDoUl");
        let doneList = document.getElementById("done-ul");
        //Deleter
        newMessage.parentElement.removeChild(newMessage);
    });
    //Done button
    doneButton.addEventListener("click", e => {
      e.preventDefault();
      // Variables
      let doneList = document.getElementById("done-ul");
      // Setting class names, id, and textContent
      newMessage.className = "created-li";
      newMessage.id = "created-list-id";
      newMessage.textContent = message;
      deleteButton.className = "delete-button btn-danger pull-right";
      deleteButton.textContent = "Nope";
      // Appended items
      doneList.appendChild(newMessage);
      newMessage.appendChild(deleteButton);
      //Remove items from To Do Side
      list.removeChild(newMessage);
    });
    e.preventDefault();
  });
});
