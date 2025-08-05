let arr1 = [1, "sfsf", true, 9, false, "sdsds"];

// let i = 0;
// while (i < arr1.length) {
//     console.log(`index = ${i} : ${arr1[i]}`);
//     i++;
// }
//
// console.log("-------------------------");
// console.log(`array length = ${arr1.length}`);
// console.log(`Value 1 is ${arr1[arr1.length - arr1.length]} -> index: ${arr1.length - arr1.length}`);
// console.log(`Value 6 is ${arr1[arr1.length - 1]} -> index: ${arr1.length - 1}`);

// grow
console.log("-------------------------");
arr1[arr1.length+2] = "Note"
arr1[arr1.length] = "CrazyTang"
arr1[arr1.length+1]
console.log(arr1);
console.log(`array length = ${arr1.length}`);


// shrink
console.log("-------------------------");
arr1.splice(0, 5)
console.log(arr1);
console.log(`array length = ${arr1.length}`);
arr1.pop()
console.log(arr1);
console.log(`array length = ${arr1.length}`);