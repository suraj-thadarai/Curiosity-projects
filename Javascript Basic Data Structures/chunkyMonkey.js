/*
    Write a function that splits an array (first argument) into groups the length of 
    size (second argument) and returns them as a two-dimensional array.
    
*/
// first create new array
// then create size array from argument array-> how to create size array
// loop through 0 to size and insert element from argument array into size array
// then insert that size array into new array

function chunkArrayInGroups(arr, size) {
    let count = 0;
    let newArray = []
    for (let j = 0; j < arr.length; j++) {
      let sizeArray = []      
        for (let i = 0; i < size; i++) {
            sizeArray.push(arr[count])
            count++
            if(count==arr.length){
                newArray.push(sizeArray)
                return newArray
              }
        }
        newArray.push(sizeArray)
    }
    return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));