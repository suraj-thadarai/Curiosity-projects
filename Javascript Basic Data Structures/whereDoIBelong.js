/*

+++++++++++++++++++ My Learning in this problem ++++++++++++++++++++++++++++++++++++++++

array sort() funtion sorts the array alphabetically, hence we provided callback function for sorting the
numerically.


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

================== Solution 1 ================
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

================== Solution 2 ================
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

================== Solution 3 ================
function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

================== Solution 4 ================
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
getIndexToIns([1, 3, 4], 2);
*/

function getIndexToIns(arr, num) {
  let sortedArray = [...arr].sort(function(a,b){return a-b})
  let lowestIndex;
  let newArray = []  
  for (let i = 0; i <= arr.length; i++) {
    // console.log('sortedArray[i]',sortedArray[i])
    // console.log('sortedArray[i+1]',sortedArray[i+1])
    if (num > sortedArray[i] && num < sortedArray[i+1]) {
      console.log(i)
      // newArray.push(num)
      lowestIndex=i+1
    } else if(num == sortedArray[i]){
        lowestIndex=i
    } else if(sortedArray.length == 0){
        lowestIndex = 0
    } else if(num>sortedArray[i]) {
        lowestIndex = i+1
    }
    
    newArray.push(sortedArray[i])
  }
  return lowestIndex
}



console.log(getIndexToIns([], 1));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
console.log(getIndexToIns([40, 60], 50))
console.log(getIndexToIns([3, 10, 5], 3))
console.log(getIndexToIns([5, 3, 20, 3], 5))
console.log(getIndexToIns([2, 20, 10], 19))
console.log(getIndexToIns([2, 5, 10], 15))