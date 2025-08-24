// เขียนฟังก์ชัน isEqual(a, b) ที่เช็คว่า ตัวเลขสองตัวมีค่าเท่ากันหรือไม่ ถ้าเท่ากัน return true ถ้าไม่เท่ากัน return false (โจทย์จาก ChatGPT)
function isEqual(a, b) {
    return a === b
}

console.log(isEqual(5, 5))   // true
console.log(isEqual(3, 7))   // false

// -----------------------------------------------------------------------------------------------------------
// เขียนฟังก์ชัน shallowArrayEqual(arr1, arr2) ที่เช็คว่า array ทั้งสองมีค่าเท่ากันทุกตัว (ตามลำดับ) (โจทย์จาก ChatGPT)
function shallowArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

console.log(shallowArrayEqual([1,2,3], [1,2,3]))  // true
console.log(shallowArrayEqual([1,2,3], [3,2,1]))  // false
console.log(shallowArrayEqual([1,2], [1,2,3]))    // false

// -----------------------------------------------------------------------------------------------------------
// เขียนฟังก์ชัน shallowObjectEqual(obj1, obj2) ที่เช็คว่า object สองตัวมี key และ value เหมือนกันทุกตัวหรือไม่ (โจทย์จาก ChatGPT)
function shallowObjectEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

let student1 = { id: 101, name: "Alice" }
let student2 = { id: 101, name: "Alice" }
let student3 = { id: 102, name: "Bob" }

console.log(shallowObjectEqual(student1, student2))  // true
console.log(shallowObjectEqual(student1, student3))  // false

// -----------------------------------------------------------------------------------------------------------
// เขียนฟังก์ชัน findMax(arr) ที่คืนค่า ตัวเลขที่มากที่สุดใน array [ถ้า array ว่าง ให้คืนค่า undefined] (โจทย์จาก ChatGPT)
function findMax(arr) {
    if (arr.length === 0) {
        return undefined
    }

    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([1, 5, 3, 9, 2]))   // 9
console.log(findMax([10, 10, 10]))      // 10
console.log(findMax([]))                // undefined

// -----------------------------------------------------------------------------------------------------------
// เขียนฟังก์ชัน countOccurrences(arr, value) ที่นับว่า ค่า value ปรากฏใน array กี่ครั้ง (โจทย์จาก ChatGPT)
function countOccurrences(arr, value) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++
        }
    }
    return count
}

console.log(countOccurrences([1,2,3,2,4,2], 2))   // 3
console.log(countOccurrences([5,5,5,5], 5))       // 4
console.log(countOccurrences([1,2,3], 7))         // 0
