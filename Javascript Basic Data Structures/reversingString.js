/*
    Reversing string 

 */

function reverseString(str) {
    let newString;
    let reverseString = [];
    let newArray = Array.from(str)
    for (let i = newArray.length - 1; i >= 0; i--) {
        reverseString.push(str[i])
    }
    newString = reverseString.join('')
    return newString;
}

console.log(reverseString("suraj"));
