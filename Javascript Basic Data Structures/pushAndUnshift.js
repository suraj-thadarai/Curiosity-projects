/*
push() and unshift() array methods is used for pushing an element at the end of the array and at the beginning of the array.
 */

let number9 = 9
let number4 = 4

let numberArray = [5,6,7,8]

console.log(numberArray)

numberArray.unshift(number4)
console.log('unshift operation adding 4 in beginning of the array',numberArray) // [4,5,6,7,8]

numberArray.push(number9)
console.log('push operation adding 9 at the end of the array',numberArray) // [4,5,6,7,8,9]
