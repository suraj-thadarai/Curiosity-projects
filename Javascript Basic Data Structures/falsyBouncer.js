/*
    Falsy Bouncer
    Remove all falsy values from an array. Return a new array; do not mutate the original array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    let newArray = []
    let duplicateArray = [...arr]
    for (let i = 0; i < duplicateArray.length; i++) {
        if (duplicateArray[i] == false || duplicateArray[i] == null || duplicateArray[i] == 0 || duplicateArray[i] == false || duplicateArray[i] == undefined) {
            duplicateArray[i] = false

        } else if (Number.isNaN(duplicateArray[i])) {
            duplicateArray[i] = false

        } else {
            newArray.push(duplicateArray[i])
        }


    }
    return newArray
}
console.log(bouncer([7, "ate", "", false, 9]));