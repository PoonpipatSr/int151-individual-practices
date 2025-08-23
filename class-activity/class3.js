// // function TinderNetwork(Shrimp) {
// //     if (Shrimp === "Note")
// //         return "NoteChopGinGung"
// //     else
// //         return "normal people"
// // }

// // console.log(TinderNetwork("Note"));
// // console.log(TinderNetwork("Poon"));

// // 1. funtion declaration
// function multiply1(a, b) {
//     return a * b
// }

// console.log(multiply1(2, 3));

// // 2. function expression (using arrow function syntax)
// const multiply2 = (a, b) => a * b
// console.log(multiply2(4, 2));

// // 3. function expression (using function declaration)
// const multiply3 = function(a, b) { return a * b }
// console.log(multiply3(5, 2));

// console.log(typeof(multiply1));
// console.log(typeof(multiply2));
// console.log(typeof(multiply3));

// const x = multiply1
// const y = multiply2
// const z = multiply3

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));

// console.log(x === multiply1);

// function multiply1(a, b) {
//     return a * b
// }
// function doSomething(x) {
//     return x
// }
// const y = doSomething(multiply1)
// console.log(y(2, 4));

// function sayGoodBye() {
//     return 'Good bye'
// }
// function doSomething() {
//     return sayGoodBye
// }

// // let doIt = doSomething()
// // console.log(doIt());
// console.log(doSomething()()); // Good bye
// // doSomething() [first ()] => sayGoodBye() [second ()]

// function sum(x, y, ...z) {
//     for (argu of arguments) {
//         console.log(argu);
//     }
//     console.log(`length: ${arguments.length}`);
//     console.log(`x: ${x}`);
//     console.log(`y: ${y}`);
//     console.log(`z: ${z}`);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8)

// function sum(...x) {
//     let temp = 0
//     for (let i of x) {
//         temp += i
//     }
//     console.log(temp);
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8)
// sum(1, 2, 3, 4, 5, 6)
// sum(1, 2, 3, 4)
// sum(1, 2)
// sum()

// function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
//     return `${greet} ${whom} ${quote}`
// }

// console.log(greeting("hi")) // Hello Guest How are you?
// console.log(greeting("Good morning", "Guy", "Great!")) // Good morning Guy Great!
// console.log(greeting(undefined, null, "Fine")) // Hello null Fine
// console.log(greeting()) // Hello Guest How are you?

// function sum(num1, num2, num3) {
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
//     return num1 + num2 + num3
// }

// let nums = [5]
// console.log(sum(10, 20, 30));

function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined)
        return undefined
    else {
        let x = sentence.split(' ')
        for (let i of x) {
            let count = 0
            for (let j of x) {
                if (i === j) {
                    count += 1
                }
            }
            i[j] = value
        }
    }
}

console.log(getFreqOfWords('Today is present and present is your gift gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));
