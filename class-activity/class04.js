// // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// // const result = words.filter(word => word.length > 6)
// // console.log(result);

// // filter function does not change an original array
// const words = ['mango', 'apple', 'mangosteen', 'orange']
// // 1. annonymous arrow function
// // const shortWords = words.filter(word => word.length <= 6) 
// // 2. annonymous function declaration
// // const shortWords = words.filter( function (word) {
// //     return word.length <= 6
// // })
// // 3. reuse callback function (named function)
// function wordLength(word) {
//     return word.length <= 6
// } 
// const shortWords = words.filter(wordLength)
// console.log(words);
// console.log(shortWords);

// // sort function changes original array
// const sortedWord = words.sort()
// console.log(words);
// console.log(sortedWord);

const words = ['mango', 'apple', 'mangosteen', 'orange']
const uppercase = words.map(word => word.toUpperCase())
console.log(uppercase);

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

// console.log(students.map(student => student.id).filter(id => id % 2 === 0));


// return all words that include 'mango' (ignore case)
// result ['Mango', 'mangosteen', 'mangoes']
// const words = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
// const result = words.find(word => word.toLowerCase() === 'apple')
// if (result !== undefined)
//     console.log("has apple");
// else 
//     console.log("does not have apple");

// const product = [1, 'RED', 102]
// const productDetail = product.reduce((detail, prop) => {
//     return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
// }, '')
// console.log(productDetail);

// const cart = [
//   { productId: 1001, price: 500, quantity: 2 },
//   { productId: 1002, price: 10, quantity: 3 },
//   { productId: 1003, price: 5, quantity: 10 },
// ]

// const sum = cart.reduce((temp, item) => {
//     return temp += item.price * item.quantity
// }, 0)
// console.log({total:sum});

// const cart = [
//   { productId: 1001, price: 500, quantity: 2 },
//   { productId: 1002, price: 10, quantity: 3 },
//   { productId: 1003, price: 5, quantity: 10 },
// ]
// // cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
// cart.unshift({ productId: 1000, price: 1, quantity: 1 })
// console.log(cart);
// console.log(cart.length)
// cart.shift({ productId: 1000, price: 1, quantity: 1 })
// console.log(cart);
// console.log(cart.length)

// console.log(cart)
// console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
// console.log(cart.length) //3
 
// const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
// words1.splice(2, 1, 'banana')
// console.log(words1);

// words1.splice(words1.length - 2, 2)
// console.log(words1);

// words1.splice(1, 0, 'melon', 'cherry')
// console.log(words1);


// const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
// // slice items at index 2 to last
// console.log(words1.slice(2));
// // slice the first to third items
// console.log(words1.slice(0, 3));
// // fill null to all items
// console.log(words1.fill(null));