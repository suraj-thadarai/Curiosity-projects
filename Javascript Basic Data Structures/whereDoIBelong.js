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