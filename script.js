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
  clickEventBtn();
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
    removeBookCover(div);
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

}

//Set background image to bookCover from obj
function addBookCover(obj, div) {
  div.style.backgroundImage = `url(${obj.bookCover})`;
  div.style.backgroundSize = 'cover';
}
//Remove background image (bookCover) from book div
function removeBookCover(div) {
  div.style.backgroundImage =  "";
  div.style.backgroundSize = "";
  div.style.backgroundColor = "lightgrey";
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
  resetForm();
})


//Adds Click event on newly created read button on book display
function clickEventBtn() {
  let readBtn = document.querySelectorAll('.readBtn');

  for (let i = 0; i < readBtn.length; i++) {
    readBtn[i].addEventListener('click', function (e) {

      if (e.target.innerText === 'Read') {
        e.target.classList.remove('greenBackground');
        e.target.setAttribute('class', 'redBackground');
        e.target.innerText = 'Not Read';
      }
      else if (e.target.innerText === 'Not Read') {
        e.target.classList.remove('redBackground');
        e.target.setAttribute('class', 'greenBackground');
        e.target.innerText = 'Read';
      }
    });
  }
}




