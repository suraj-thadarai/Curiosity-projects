/*
    We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and
    returns a new array. elem represents an element that may or may not be present on one or more of the arrays
    nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array
    such that any array nested within arr containing elem has been removed.

*/

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {        
        let count = 0
        for (let j = 0; j < arr[i].length; j++) {            
            if(arr[i][j] == elem){
                count++

            }
            
        }
        if(count == 0){
            newArr.push(arr[i])
        }
        
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))