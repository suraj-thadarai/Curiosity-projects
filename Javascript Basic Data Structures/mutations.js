/*
    Return true if the string in the first element of the array contains all of the letters of the string in 
    the second element of the array.

    For example, ["hello", "Hello"], should return true because all of the letters in the second string are 
    present in the first, ignoring case.

    The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

    Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/

// step 1 check the second element string's letters contains into first elements string

function mutation(arr) {
    let boolArray = []
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
            boolArray.push(true)
        } else {
            boolArray.push(false)
        }

    }
    if (boolArray.includes(false)) {
        return false
    } else {
        return true
    }

}

console.log(mutation(["hello", "hey"]));