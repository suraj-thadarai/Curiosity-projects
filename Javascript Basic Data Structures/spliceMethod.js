/*
    splice() method remove any number of consecutive elements from anywhere in an array
    splice takes upto 3 parameters, but for now we will look at frist two, first parameter represents
    the index on the array from which to begin removing elements while the second parameter indicates the number
    of elements to delete.

    splice() method not only modifies the array it's being called on, but it also returns a new array containing
     the value of the removed elements.

     we can use the third parameter, comprised of one or more elements, to add to the array.
*/

// let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(2, 2);

// console.log(array) // output ['today', 'was', 'great']

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);