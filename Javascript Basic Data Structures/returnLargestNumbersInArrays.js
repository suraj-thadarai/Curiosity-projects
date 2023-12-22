/*
    Return Largest Numbers in Arrays
    Return an array consisting of the largest number from each provided sub-array. For simplicity, the 
    provided array will contain exactly 4 sub-arrays.

    Remember, you can iterate through an array with a simple for loop, and access each member with array 
    syntax arr[i].

    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
    should return [27, 5, 39, 1001].
*/

function largestOfFour(arr) {
    let largestArray = []
    for (let i = 0; i < arr.length; i++) {
        let largest = -111111
        for (let j = 0; j < arr[i].length; j++) {
            if (largest < arr[i][j]) {
                largest = arr[i][j]
            }
        }
        largestArray.push(largest)
    }
    return largestArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

