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

module.exports = longestWord
