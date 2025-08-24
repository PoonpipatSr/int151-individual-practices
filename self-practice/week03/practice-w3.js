// Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase 
// and values representing the frequency of occurrences of each word with ignore case in the sentence. 
// If the input string is null or undefined, return undefined.

function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {
        return undefined
    }

    let words = sentence.toLowerCase().split(' ')
    let temp = {}

    for (let w of words) {
        if (temp[w]) {
            temp[w] += 1
        } 
        else {
            temp[w] = 1
        }
    }
    return temp
}

console.log(getFreqOfWords('Today is present and present is your gift gift')) // { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 2 }
console.log(getFreqOfWords('Do you best just do it')) // { do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null))        // undefined
console.log(getFreqOfWords(undefined))   // undefined
