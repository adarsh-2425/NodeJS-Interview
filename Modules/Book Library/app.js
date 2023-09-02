const Book = require('./book.js');
const library = require('./library.js');

// Create instance of books
const myBook1 = new Book('Aadujeevitham', 'Benyamin', 'ISBN123', '200');
const myBook2 = new Book('Nanayuvan Njn Kadalakunnu', 'Nimna Vijay', 'ISBN128', '200');

// Add books to books array
library.addBook(myBook1);
library.addBook(myBook2);

// Find book by title
const book = library.findBookByTitle('Nanayuvan Njn Kadalakunnu');
console.log(book);
