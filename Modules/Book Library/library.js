// Books Array
let bookCollection = [];

// Adding Books
function addBook(book) {
  bookCollection.push(book);
  console.log(`${book.title} added`);
}

// Find book by title
function findBookByTitle(title) {
  const book = bookCollection.find(book => 
    book.title === title);

  if (book) {
    return book;
  } else {
    return 'No Book Found'
  }
}

module.exports = {
  addBook,
  findBookByTitle
}
