//Array for holding newly created book objs
let myLibrary = [];


//Form fields as variables
const authorField = document.querySelector("#author");
const titleField = document.querySelector("#title");
const pageCountField = document.querySelector("#pageCount");
const bookCoverField = document.querySelector("#bookCover");
const readField = document.querySelector("#read");
const notReadField = document.querySelector("#notRead");


//Constructor to create new book objs
function Book(author, title, pageCount, bookCover, read, index) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.bookCover = bookCover;
  this.read = read;
  this.index = index;
}

//Function to check which Radio Button is selected
function getRadioVal(form, name) {
  let val;
  let radios = form.elements[name];

  for (let i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }
  return val;
}

//Function to reset form after submitting
function resetForm() {
  authorField.value = "";
  titleField.value = "";
  pageCountField.value = "";
  bookCoverField.value = "";
  readField.value = "";
  notReadField.value = "";
}

//Function to loop through book objs array and display on grid
function displayBooks(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].displayed !== true) {
      createDisplay(array[i]);
    }
  }
}

//Creates element, updates class/id attributes, appends to DOM, updates 'displayed' property
function createDisplay(obj) {
  const gridContainer = document.querySelector("#book-grid-container");
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.setAttribute('id', obj['title']);
  gridContainer.appendChild(bookDiv);

  let titleP = document.createElement('p');
  titleP.innerText = obj.title;
  let authorP = document.createElement('p');
  authorP.innerText = obj.author;

  let readBtn = document.createElement('button');
  if (obj.read === 'true') {
    readBtn.innerText = 'Read';
  } else {
    readBtn.innerText = 'Not Read';
  }

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(readBtn);

  obj.displayed = true;

}

function addBookCover(obj) {
  let title = o
  // add title, author text, read/not read (and corresponding colors), add remove button
}

// Submit button --> sends form data through Book constructor
const submitBook = document.querySelector("#submit");
submitBook.addEventListener('click', function (e) {

  e.preventDefault();
  bookIndex = myLibrary.length;
  const form = document.querySelector("#form");

  const bookAddition = new Book(
    authorField.value,
    titleField.value,
    pageCountField.value,
    bookCoverField.value,
    getRadioVal(form, 'haveRead'),
    bookIndex);

  myLibrary.push(bookAddition);

  displayBooks(myLibrary);
  resetForm();
})

