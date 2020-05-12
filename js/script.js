// var button = document.getElementById("enter");
// var input = document.getElementById("input");
// var ol = document.querySelector("ol");
//
// function inputLength() {
//   return input.value.length;
// }
//
// function createListElement() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ol.appendChild(li);
//   input.value = "";
// }
// function addListAfterClick() {
//      if (inputLength() > 0) {
//      createListElement();
//    }
// }
//
// function addListAfterKeypress(event) {
//       if (inputLength() > 0 && event.keyCode ===13) {
//       createListElement();
//     }
// }
//
//
// button.addEventListener("click", addListAfterClick );
// input.addEventListener("keypress", addListAfterKeypress);


// Solution

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value + " "));
  ol.appendChild(li);
  createDeleteButton(li);
  input.value = "";
}

function createDeleteButton(listItem) {
  var deleteButton = document.createElement("Button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  listItem.appendChild(deleteButton);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function markDoneItem(listItem) {
  if (listItem.target.tagName === "LI") {
    listItem.target.classList.toggle("done");
  }
}

function deleteDoneItem(listItem) {
  if (listItem.target.tagName === "BUTTON" && listItem.target.parentElement.classList.contains("done")) {
    listItem.target.parentElement.remove();
  }
}

ol.addEventListener("click", markDoneItem);
ol.addEventListener("click", deleteDoneItem);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
