class Book {
  constructor(id, title, author = "", yearPublished = null) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.isAvailable = true;
    if (this.id.length === 0 || this.title.length === 0) {
      throw ("Book must have id and title");
    }
  }

  getInfo() {
    return (`${this.title} by ${this.author} (${this.yearPublished})`)
  }

  toggleAvailability() {
    return this.isAvailable ? this.isAvailable = false : this.isAvailable = true;
  }

}
module.exports = { Book }
// Example usage:
const book1 = new Book('B1', 'Clean Code', 'Robert C. Martin', 2008)
console.log(book1.getInfo()) // "Clean Code by Robert C. Martin (2008)"
console.log(book1.isAvailable) // true
book1.toggleAvailability()
console.log(book1.isAvailable) // false
