/*
    splice() method remove any number of consecutive elements from anywhere in an array
    splice takes upto 3 parameters, but for now we will look at frist two, first parameter represents
    the index on the array from which to begin removing elements while the second parameter indicates the number
    of elements to delete.

    splice() method not only modifies the array it's being called on, but it also returns a new array containing
     the value of the removed elements.
*/

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

console.log(array) // output ['today', 'was', 'great']