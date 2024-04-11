console.log('I am sentient')

let myLibrary = [
  {
    author: 'Douglas Adams',
    title: "The ULTIMATE Hitchhiker's Guide to the galaxy",
    pages: 815,
    read: false,
  },
  {
    author: 'Chibi Jäger',
    title: "Meu ossinho delicioso",
    pages: 222,
    read: true,
  }];


function returnCard(arr) {
  innerText = '';
  for (i = 0; i < arr.length; i++) {
    if (arr[i].read == true) {
      innerText += `<div class="books-cards">
      <div>
        <div class="book-title">
          <h4>${arr[i].title}</h4>
        </div>
        <div class="book-author">      
          <p> written by ${arr[i].author}</p>
        </div>
        <div class="book-pages">      
          <p> ${arr[i].pages} pages</p>
        </div> 
        <div class="book-read">      
          <input type="checkbox" name="${arr[i].title}" onclick="changeRead(this.name)" checked>
          <label class="check-box" id="check-box-${i}" for="${arr[i].title}"> I have read the book</label><br>
        </div>         
        <button class="remove-button" value="${arr[i].title}" onclick="removeBook(this.value)"> Remove this book    
        </button>
      </div></div>`
    } else {
      innerText += `<div class="books-cards">
      <div>
        <div class="book-title">
          <h4>${arr[i].title}</h4>
        </div>
        <div class="book-author">      
          <p> written by ${arr[i].author}</p>
        </div>
        <div class="book-pages">      
          <p> ${arr[i].pages} pages</p>
        </div> 
        <div class="book-read">      
          <input type="checkbox" name="${arr[i].title}" onclick="changeRead(this.name)"  >
          <label class="check-box" id="check-box-${i}" for="${arr[i].title}"> I haven't read the book</label><br>
        </div>         
        <button class="remove-button" value="${arr[i].title}" onclick="removeBook(this.value)"> Remove this book 
        </button>
      </div></div>`
    }
  } return innerText;
}

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const container = document.getElementById('books-cards-container');

const modal = document.getElementById('myModal');
const modalSpan = document.getElementById('modalSpan');
const addAuthor = document.querySelector('#author');
const listAuthor = document.querySelector('.list_author');
const addTitle = document.querySelector('#title');
const listTitle = document.querySelector('.list_title');
const addPages = document.querySelector('#pages');
const listPages = document.querySelector('.list_pages');
const addHasread = document.querySelector('#hasread');
const listHasread = document.querySelector('.list_hasread');
const newBook = document.querySelector('#newbook');
const submit = document.querySelector('.submit');


newBook.addEventListener('click', () => {
  console.log(`New book works!!`)
  modal.style.display = 'block';
  modalSpan.onclick = function () {
    modal.style.display = "none";
  }
})

//this will start the cards
container.innerHTML = returnCard(myLibrary);


submit.addEventListener('click', () => {
  myLibrary.push(new Book(addAuthor.value.toString(), addTitle.value.toString(), addPages.value, addHasread.checked));

  container.innerHTML = returnCard(myLibrary);

  console.table(myLibrary);
  modal.style.display = "none";
  addTitle.value = '';
  addAuthor.value = '';
  addPages.value = '';
  addHasread.checked = false;
})

function removeBook(i) {
  let index = myLibrary.findIndex(p => p.title == i);
  myLibrary.splice(index, 1)
  container.innerHTML = returnCard(myLibrary);
}


let clicks = 0;
function changeRead(i) {
  let index = myLibrary.findIndex(p => p.title == i);
  let changeText = document.getElementById('check-box-' + index);
  if (myLibrary[index].read == true) {
    myLibrary[index].read = false;
    changeText.innerHTML = "I haven't read the book";
  } else {
    myLibrary[index].read = true;
    changeText.innerHTML = "I have read the book"
  }
}

