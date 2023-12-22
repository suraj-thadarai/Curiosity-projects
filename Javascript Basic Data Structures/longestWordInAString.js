/*
    Finding the longest word in a string
    And our response should be a number

    
 */

function findLongestWordLength(str) {
    let word = str.split(" ")
    let largest = 0;
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        if (largest < word[i].length) {
            largest = word[i].length
        }

    }
    return largest
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));