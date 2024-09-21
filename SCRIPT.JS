let notesCollection = document.querySelector(".notes__collection");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".notes__collection");

function getNotes() {
  notesCollection.innerHTML = localStorage.getItem("notes");
}
getNotes();

function showNotes() {
  let inputBox = document.createElement("P");
  inputBox.classList.add("input__box");
  inputBox.setAttribute("contenteditable", "true");
  let img = document.createElement("IMG");
  img.src = "images/delete.png";
  notesCollection.appendChild(inputBox).appendChild(img);
  updateData();
}

function updateData() {
  localStorage.setItem("notes", notesCollection.innerHTML);
}

createBtn.addEventListener("click", () => {
  showNotes();
});

notesCollection.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateData();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input__box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateData();
      };
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
