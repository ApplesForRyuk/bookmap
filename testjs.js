var myFantasyBooksArrray = ['Eragon', 'Lord of the Rings', 'Harry Potter and the Philosopher\'s Stone'];
const randomBook = myFantasyBooksArrray[(Math.random() * myFantasyBooksArrray.length) | 0]
console.log(randomBook);
