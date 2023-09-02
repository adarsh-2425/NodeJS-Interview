# Question: 
## You are tasked with building a Node.js application to manage a library of books. Create three modules: library.js, book.js, and app.js. Each module should serve a specific purpose in managing the library's book collection.

1. library.js Module:  
- Create a module named library.js that exports an empty array called bookCollection.
- Add a function addBook(book) that takes a book object as a parameter and adds it to the bookCollection array.
- Add a function findBookByTitle(title) that takes a book title as a parameter and returns the book object with that title from the bookCollection. If the book is not found, return null.

2. book.js Module:  
- Create a module named book.js that exports a constructor function called Book. The Book constructor should take the following parameters: title, author, isbn, and pages.
- The Book constructor should create book objects with properties for title, author, isbn, and pages.

3. app.js Module:  
- In the app.js module, import the library.js and book.js modules.
- Create several instances of the Book class to represent books in your library and use the addBook function from the library.js module to add them to the library.
- Use the findBookByTitle function to search for a book by its title and log the result to the console.
