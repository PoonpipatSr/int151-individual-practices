let arr1 = [1, "sfsf", true, 9, false, "sdsds"];

let i = 0;
while (i < arr1.length) {
    console.log(`index = ${i} : ${arr1[i]}`);
    i++;
}

console.log("-------------------------");
console.log(`array length = ${arr1.length}`);
console.log(`Value 1 is ${arr1[arr1.length - arr1.length]} -> index: ${arr1.length - arr1.length}`);
console.log(`Value 6 is ${arr1[arr1.length - 1]} -> index: ${arr1.length - 1}`);
