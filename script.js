
let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}



const btn = document.querySelector("#addBook");
const gridContainer = document.querySelector(".grid-container");
btn.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("book");
    gridContainer.append(newDiv)
});

const form = document.querySelectorAll('#myForm')
form.submit(function(e){
    let book = new Book (("input[name = 'email']").value),
                         ("input[name = 'title']").value),
                         ("input[name = 'pages']").value),
                         ("input[name = 'read']").value))
                        })