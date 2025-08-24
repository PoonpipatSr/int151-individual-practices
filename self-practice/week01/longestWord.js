function longestWord(sentence) {
  if (sentence === undefined || sentence === null || typeof sentence !== "string" || sentence.length === 0) {
    return ""
  }
  else {
    let word = sentence.split(' ');
    let temp = ''
    for (let v of word) {
      if (v.length > temp.length) {
        temp = v;
      }
    }
    return temp
  }
}

console.log(longestWord('The quick brown fox jumped over the lazy dog')); // jumped
console.log(longestWord('Well, this test-case is tricky!')); // test-case
console.log(longestWord('JavaScript is super fun and powerful')); // JavaScript
console.log(longestWord('Hi')); // Hi
console.log(longestWord('')); // empty string
console.log(longestWord(undefined)); // empty string
console.log(longestWord(null)); // empty string
console.log(longestWord(12345)); // empty string
console.log(longestWord(['not', 'a', 'string'])); // empty string
