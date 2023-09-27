let addToDoButton = document.getElementById(`addToDo`);
let toDoContainer = document.getElementById(`toDoContainer`);
let inputText = document.getElementById(`inputText`);
let clearToDoButton = document.getElementById(`clearToDo`);

function AddParagraph() {
  let paragraph = document.createElement(`p`);
  paragraph.classList.add(`paragraph-styling`);
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value;
  inputText.value = "";
  paragraph.addEventListener(`click`, function () {
    paragraph.style.textDecoration = `line-through`;
  });
  paragraph.addEventListener(`dblclick`, function () {
    toDoContainer.removeChild(paragraph);
  });
  clearToDoButton.addEventListener(`click`, function () {
    toDoContainer.removeChild(paragraph);
  });
}
addToDoButton.addEventListener("click", function () {
  const iconElement = document.createElement("i");
  iconElement.classList.add("fa-solid", "fa-star"); 
  document.getElementById("toDoContainer").appendChild(iconElement);
  clearToDoButton.addEventListener(`click`, function () {
    toDoContainer.removeChild(iconElement);
  });
});

addToDoButton.addEventListener(`click`, AddParagraph);
