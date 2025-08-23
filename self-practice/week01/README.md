[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6CrXJJAp)
# Find the Longest Word

## Write a function that takes a sentence (string) and returns the longest word in the sentence. The function should also handle edge cases as follows:

- If the input is undefined, null, or not a string, the function should return an empty string `""`.
- If the input string is empty, return an empty string `""`.
- If multiple words share the longest length, return the first one that appears.
- Count punctuation as part of the word (no cleaning required).

## Examples:

- longestWord("The quick brown fox jumped over the lazy dog") should return `"jumped"`.
- longestWord("JavaScript is super fun and powerful") should return `"JavaScript"`.
- longestWord("Hi") should return `"Hi"`.
- longestWord("Well, this test-case is tricky!") should return `"test-case"`.
- longestWord("") should return `""`.
- longestWord(undefined) should return `""`.
- longestWord(null) should return `""`.
- longestWord(12345) should return `""`.
- longestWord(["not", "a", "string"]) should return `""`.
