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

  createBookElements(obj, bookDiv);

  obj.displayed = true;
}

//Creates and appends the Title, Book and Read btn for the book display
function createBookElements(obj, div) {

  addBookCover(obj, div);
  let titleP = document.createElement('p');
  titleP.setAttribute('id', 'divTitle')
  let authorP = document.createElement('p');
  authorP.setAttribute('id', 'divAuthor')

  div.addEventListener('mouseover', function(e) {
    hideBookCover(div);
    authorP.innerText = obj.author;
    titleP.innerText = obj.title;
  })

  div.addEventListener('mouseout', function(e) {
    authorP.innerText =  "";
    titleP.innerText = "";
    addBookCover(obj, div);
  })

  div.appendChild(titleP);
  div.appendChild(authorP);
  div.appendChild(addReadBtn(obj));
  div.appendChild(removeBook());

}

//Set background image to bookCover from obj
function addBookCover(obj, div) {
  div.style.backgroundImage = `url(${obj.bookCover})`;
  div.style.backgroundSize = 'cover';
}

//Remove background image (bookCover) from book div
function hideBookCover(div) {
  div.style.backgroundImage = "";
  div.style.backgroundSize = "";
  div.style.backgroundColor = "lightpurple";
}

//Adding X in top right corner for book removal 
function removeBook() {
  let xButton = document.createElement('div');
  xButton.setAttribute('class', 'xButton');
  xButton.textContent = "X";
  return xButton;

}


//Creates Read button that will be on each book display
function addReadBtn(obj) {
  let readBtn = document.createElement('button');
  readBtn.setAttribute('class', 'readBtn');
  if (obj.read === 'true') {
    readBtn.innerText = 'Read';
    readBtn.classList.add('greenBackground');

  } else {
    readBtn.innerText = 'Not Read';
    readBtn.classList.add('redBackground');
  }

  return readBtn;
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
  clickEventBtn();
  resetForm();
})


//Adds Click event on newly created read button on book display
function clickEventBtn() {
  document.querySelectorAll('.readBtn').forEach(item => {
    item.addEventListener('click', function () {
      if (item.innerText === 'Read') {
        item.classList.remove('greenBackground');
        item.setAttribute('class', 'redBackground');
        item.innerText = 'Not Read';
      }
      else if (item.innerText === 'Not Read') {
        item.classList.remove('redBackground');
        item.setAttribute('class', 'greenBackground');
        item.innerText = 'Read';
      }
    });
  })
}




